#!/usr/bin/env python3
"""
Playwright script to analyze the structure and content of https://www.tepelka.cz/
for competitive analysis of heat pump business websites.
"""

import asyncio
from playwright.async_api import async_playwright
import json

async def analyze_tepelka_website():
    async with async_playwright() as p:
        # Launch browser
        browser = await p.chromium.launch(headless=False)  # Set to False to see what's happening
        context = await browser.new_context()
        page = await context.new_page()
        
        try:
            print("Navigating to https://www.tepelka.cz/...")
            await page.goto("https://www.tepelka.cz/", wait_until="networkidle")
            
            # Wait a moment for any dynamic content to load
            await page.wait_for_timeout(3000)
            
            print("\n=== ANALYZING SITE STRUCTURE ===\n")
            
            # 1. Main navigation menu
            print("1. MAIN NAVIGATION MENU:")
            print("-" * 40)
            
            # Try different selectors for navigation
            nav_selectors = [
                "nav",
                ".navbar",
                ".navigation", 
                ".menu",
                "header nav",
                "[role='navigation']",
                ".nav",
                "ul.menu"
            ]
            
            nav_items = []
            for selector in nav_selectors:
                try:
                    nav_elements = await page.query_selector_all(f"{selector} a")
                    if nav_elements:
                        print(f"Found navigation with selector: {selector}")
                        for element in nav_elements:
                            text = await element.inner_text()
                            href = await element.get_attribute("href")
                            if text.strip():
                                nav_items.append({"text": text.strip(), "href": href})
                        break
                except:
                    continue
            
            if nav_items:
                for item in nav_items[:10]:  # Limit to first 10 items
                    print(f"  • {item['text']} -> {item['href']}")
            else:
                print("  No standard navigation menu found, checking for other menu structures...")
                # Try to find any clickable elements that might be menu items
                clickable_elements = await page.query_selector_all("a[href]")
                potential_nav = []
                for element in clickable_elements[:20]:  # Check first 20 links
                    text = await element.inner_text()
                    href = await element.get_attribute("href")
                    if text.strip() and len(text.strip()) < 50:  # Likely menu items are short
                        potential_nav.append({"text": text.strip(), "href": href})
                
                print("Potential navigation items found:")
                for item in potential_nav[:10]:
                    print(f"  • {item['text']} -> {item['href']}")
            
            # 2. Page title and main heading
            print(f"\n2. PAGE TITLE AND MAIN CONTENT:")
            print("-" * 40)
            
            title = await page.title()
            print(f"Page Title: {title}")
            
            # Look for main headings
            h1_elements = await page.query_selector_all("h1")
            if h1_elements:
                print("Main Headings (H1):")
                for h1 in h1_elements:
                    text = await h1.inner_text()
                    if text.strip():
                        print(f"  • {text.strip()}")
            
            # 3. Content sections analysis
            print(f"\n3. CONTENT SECTIONS ANALYSIS:")
            print("-" * 40)
            
            # Look for common section structures
            section_selectors = ["section", ".section", "main", ".content", "article"]
            
            for selector in section_selectors:
                sections = await page.query_selector_all(selector)
                if sections:
                    print(f"Found {len(sections)} sections using selector: {selector}")
                    for i, section in enumerate(sections[:5]):  # Analyze first 5 sections
                        # Get section heading if available
                        headings = await section.query_selector_all("h1, h2, h3")
                        if headings:
                            heading_text = await headings[0].inner_text()
                            print(f"  Section {i+1}: {heading_text.strip()}")
                        else:
                            # Get first bit of text content
                            text_content = await section.inner_text()
                            preview = text_content.strip()[:100] + "..." if len(text_content.strip()) > 100 else text_content.strip()
                            print(f"  Section {i+1}: {preview}")
                    break
            
            # 4. Key messaging and value propositions
            print(f"\n4. KEY MESSAGING ANALYSIS:")
            print("-" * 40)
            
            # Look for prominent text, slogans, or value propositions
            text_selectors = [
                "h1, h2, h3", 
                ".hero", 
                ".banner", 
                ".slogan",
                ".tagline",
                ".intro",
                "p strong",
                ".highlight"
            ]
            
            key_messages = []
            for selector in text_selectors:
                try:
                    elements = await page.query_selector_all(selector)
                    for element in elements:
                        text = await element.inner_text()
                        if text.strip() and len(text.strip()) > 10 and len(text.strip()) < 200:
                            key_messages.append(text.strip())
                except:
                    continue
            
            # Remove duplicates and show unique messages
            unique_messages = list(dict.fromkeys(key_messages))
            print("Key messaging found:")
            for msg in unique_messages[:10]:  # Show first 10 unique messages
                print(f"  • {msg}")
            
            # 5. Contact information
            print(f"\n5. CONTACT INFORMATION:")
            print("-" * 40)
            
            # Look for contact information
            contact_selectors = [
                "a[href*='tel:']",
                "a[href*='mailto:']", 
                ".contact",
                ".phone",
                ".email",
                ".address"
            ]
            
            contact_info = []
            for selector in contact_selectors:
                try:
                    elements = await page.query_selector_all(selector)
                    for element in elements:
                        if selector.startswith("a[href*='tel:']"):
                            href = await element.get_attribute("href")
                            text = await element.inner_text()
                            contact_info.append(f"Phone: {text.strip()} ({href})")
                        elif selector.startswith("a[href*='mailto:']"):
                            href = await element.get_attribute("href")
                            text = await element.inner_text()
                            contact_info.append(f"Email: {text.strip()} ({href})")
                        else:
                            text = await element.inner_text()
                            if text.strip():
                                contact_info.append(f"Contact: {text.strip()}")
                except:
                    continue
            
            unique_contact = list(dict.fromkeys(contact_info))
            for contact in unique_contact[:5]:
                print(f"  • {contact}")
            
            # 6. Overall page structure analysis
            print(f"\n6. PAGE STRUCTURE ANALYSIS:")
            print("-" * 40)
            
            # Get basic structure
            body_html = await page.content()
            
            # Count different element types
            element_counts = {}
            for tag in ["div", "section", "article", "aside", "nav", "header", "footer", "main"]:
                count = len(await page.query_selector_all(tag))
                if count > 0:
                    element_counts[tag] = count
            
            print("HTML Structure:")
            for tag, count in element_counts.items():
                print(f"  • {tag}: {count} elements")
            
            # 7. Images and media analysis
            print(f"\n7. IMAGES AND MEDIA:")
            print("-" * 40)
            
            images = await page.query_selector_all("img")
            print(f"Total images: {len(images)}")
            
            # Get alt text from first few images
            for i, img in enumerate(images[:5]):
                alt = await img.get_attribute("alt")
                src = await img.get_attribute("src")
                if alt:
                    print(f"  • Image {i+1}: {alt} (src: {src})")
            
            # 8. Look for specific business-related content
            print(f"\n8. BUSINESS-SPECIFIC CONTENT:")
            print("-" * 40)
            
            # Search for heat pump related keywords in the page content
            page_text = await page.inner_text("body")
            heat_pump_keywords = [
                "tepelné čerpadlo", "tepelná čerpadla", "tepelné čerpadla",
                "vytápění", "chlazení", "úspora", "energie", "ekologie",
                "instalace", "servis", "údržba"
            ]
            
            found_keywords = []
            for keyword in heat_pump_keywords:
                if keyword.lower() in page_text.lower():
                    found_keywords.append(keyword)
            
            if found_keywords:
                print("Heat pump related keywords found:")
                for keyword in found_keywords:
                    print(f"  • {keyword}")
            
            print(f"\n9. FOOTER ANALYSIS:")
            print("-" * 40)
            
            footer_elements = await page.query_selector_all("footer")
            if footer_elements:
                for footer in footer_elements:
                    footer_text = await footer.inner_text()
                    # Extract useful footer information (first 500 chars)
                    preview = footer_text.strip()[:500] + "..." if len(footer_text.strip()) > 500 else footer_text.strip()
                    print(f"Footer content preview: {preview}")
            
            print(f"\n10. META INFORMATION:")
            print("-" * 40)
            
            # Get meta description
            meta_desc = await page.get_attribute("meta[name='description']", "content")
            if meta_desc:
                print(f"Meta Description: {meta_desc}")
            
            # Get meta keywords if available
            meta_keywords = await page.get_attribute("meta[name='keywords']", "content")
            if meta_keywords:
                print(f"Meta Keywords: {meta_keywords}")
            
            print(f"\n=== ANALYSIS COMPLETE ===")
            
        except Exception as e:
            print(f"Error analyzing website: {str(e)}")
            
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(analyze_tepelka_website())