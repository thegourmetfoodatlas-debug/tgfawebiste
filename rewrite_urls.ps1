$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $original = $content
    
    # Replace normal page links
    $content = $content -replace 'href="index\.html"', 'href="/"'
    $content = $content -replace 'href="about\.html"', 'href="/about"'
    $content = $content -replace 'href="recipes\.html"', 'href="/recipes"'
    $content = $content -replace 'href="menu-engineering\.html"', 'href="/menu-engineering"'
    $content = $content -replace 'href="media\.html"', 'href="/media"'
    $content = $content -replace 'href="blogs\.html"', 'href="/blogs"'
    $content = $content -replace 'href="contact\.html"', 'href="/contact"'
    
    # Replace pages with query params
    $content = $content -replace 'href="recipe-detail\.html\?id=', 'href="/recipe-detail?id='
    $content = $content -replace 'href="blog-detail\.html\?id=', 'href="/blog-detail?id='

    # Replace logo links that incorrectly point to #
    $content = $content -replace '<a href="#" class="flex items-center gap-[12]">', '<a href="/" class="flex items-center gap-2">'
    
    if ($content -cne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($false)))
        Write-Host "Updated $($file.Name)"
    }
}
