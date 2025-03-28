
Google Dorking, also known as Google Hacking, uses advanced search operators to find specific information that might not be easily discoverable through simple searches. This can be useful for research, security assessments (penetration testing), and discovering hidden content.

**Disclaimer:** Use these techniques responsibly and ethically. Accessing information you are not authorized to view can be illegal and unethical. This cheatsheet is for educational purposes only.

---

## Basic Search Operators

These are common operators used in everyday searches but are fundamental to dorking.

### 1. Exact Phrase: `""`

*   **Syntax:** `"search phrase"`
*   **Usage:** Finds pages containing the exact phrase enclosed in double quotes.
*   **Example:** `"internal server error"`, `"confidential document"`

### 2. Exclude Term: `-`

*   **Syntax:** `search terms -exclude_this`
*   **Usage:** Excludes results that contain the term following the hyphen.
*   **Example:** `jaguar speed -car` (Find info about the animal, not the car), `security report -site:example.com`

### 3. Wildcard: `*`

*   **Syntax:** `search * term` or `"search * term"`
*   **Usage:** Acts as a placeholder for one or more unknown words.
*   **Example:** `"how to * a website"`, `login as *`

### 4. Logical OR: `OR` or `|`

*   **Syntax:** `term1 OR term2`, `term1 | term2`
*   **Usage:** Finds pages containing either `term1` or `term2`. `OR` must be capitalized.
*   **Example:** `admin OR administrator`, `"login page" | "signin page"`

### 5. Grouping: `()`

*   **Syntax:** `(term1 OR term2) term3`
*   **Usage:** Groups terms together, useful for combining multiple operators or OR conditions.
*   **Example:** `(admin OR administrator) site:example.com`, `site:gov (filetype:pdf OR filetype:docx) "budget"`

### 6. Number Range: `..`

*   **Syntax:** `number1..number2`
*   **Usage:** Searches for numbers within a specific range. Useful for versions, years, prices, etc.
*   **Example:** `security conference 2022..2024`, `camera $300..$500`

---

## Advanced Dorking Operators

These operators target specific parts of a web page or specific file types.

### 7. `site:`

*   **Syntax:** `site:domain.com`
*   **Usage:** Restricts search results to a specific website or domain. Can also target TLDs (`site:gov`, `site:edu`) or subdomains (`site:dev.example.com`).
*   **Example:** `site:github.com password`, `site:*.gov "internal use only"`

### 8. `intitle:`

*   **Syntax:** `intitle:"search term"`
*   **Usage:** Finds pages where the specified term(s) appear in the HTML title tag (`<title>`).
*   **Example:** `intitle:"admin login"`, `intitle:"index of /"`

### 9. `allintitle:`

*   **Syntax:** `allintitle:term1 term2`
*   **Usage:** Similar to `intitle:`, but *all* specified terms must appear in the title. Cannot be easily combined with other operators.
*   **Example:** `allintitle:admin login panel`

### 10. `inurl:`

*   **Syntax:** `inurl:term`
*   **Usage:** Finds pages where the specified term(s) appear within the URL path or domain name.
*   **Example:** `inurl:login.php`, `inurl:/admin/`, `inurl:dashboard`

### 11. `allinurl:`

*   **Syntax:** `allinurl:term1 term2`
*   **Usage:** Similar to `inurl:`, but *all* specified terms must appear in the URL. Cannot be easily combined with other operators.
*   **Example:** `allinurl:etc passwd`, `allinurl:admin login`

### 12. `intext:`

*   **Syntax:** `intext:"search phrase"`
*   **Usage:** Finds pages where the specified term(s) appear within the body content of the page. Often redundant with basic search unless targeting very specific phrases.
*   **Example:** `intext:"Copyright 2023 Internal"` , `intext:"username * password"`

### 13. `allintext:`

*   **Syntax:** `allintext:term1 term2`
*   **Usage:** Similar to `intext:`, but *all* specified terms must appear in the body text. Cannot be easily combined with other operators.
*   **Example:** `allintext:"login failed" "try again"`

### 14. `filetype:` (or `ext:`)

*   **Syntax:** `filetype:extension` or `ext:extension`
*   **Usage:** Restricts results to specific file types (e.g., pdf, docx, xlsx, txt, log, sql, cfg, env).
*   **Example:** `filetype:pdf "confidential report"`, `site:example.com filetype:log`, `ext:sql "CREATE TABLE"`

### 15. `related:`

*   **Syntax:** `related:domain.com`
*   **Usage:** Finds websites that Google considers similar or related to the specified domain.
*   **Example:** `related:google.com`

### 16. `cache:`

*   **Syntax:** `cache:url`
*   **Usage:** Shows Google's cached (stored) version of a specific web page. Useful if the live page is down or has changed.
*   **Example:** `cache:example.com/news.html`

### 17. `info:` (or `id:`)

*   **Syntax:** `info:url`
*   **Usage:** Provides information Google has about a specific URL, including links to cache, related pages, etc. (Often just redirects to a standard search for the URL).
*   **Example:** `info:example.com`

### 18. `define:`

*   **Syntax:** `define:term`
*   **Usage:** Provides definitions of the specified term gathered from various online sources.
*   **Example:** `define:phishing`

### 19. `link:` (Largely Deprecated)

*   **Syntax:** `link:url`
*   **Usage:** Historically used to find pages linking to the specified URL. Google has largely deprecated this operator, and it may return incomplete or no results. Use third-party backlink checkers instead.
*   **Example:** `link:example.com` (Use with caution, results may be unreliable)

---

## Combining Operators (Examples)

The real power of Google Dorking comes from combining these operators.

*   **Find login pages on a specific site:**
    `site:example.com (intitle:"Login" OR inurl:login)`
*   **Find Excel files containing "password" on educational sites:**
    `site:edu filetype:xlsx intext:password`
*   **Find exposed database dumps:**
    `filetype:sql ("dump" OR "backup") ("passwords" OR "users")`
*   **Find configuration files:**
    `(filetype:cfg OR filetype:env OR filetype:ini) intext:password -example -sample -github.com`
*   **Find directory listings:**
    `intitle:"index of /" ("backup" OR "admin" OR "private")`
*   **Find potentially sensitive documents:**
    `site:*.gov filetype:pdf ("classified" OR "sensitive but unclassified" OR "FOUO")`
*   **Find error messages revealing paths:**
    `intext:"Warning: mysql_connect():" OR intext:"Fatal error: require_once()"`

---

Remember to use these operators responsibly and ethically. Happy (ethical) dorking!
