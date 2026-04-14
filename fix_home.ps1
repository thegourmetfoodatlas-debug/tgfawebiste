$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $original = $content
    
    $content = $content -replace '<a href="#" class="flex items-center gap-2 mb-4">', '<a href="/" class="flex items-center gap-2 mb-4">'
    
    # Let me also fix the mobile nav Home logo which might still have "#"
    $content = $content -replace '<a href="#" class="flex items-center gap-2">', '<a href="/" class="flex items-center gap-2">'
    
    if ($content -cne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($false)))
        Write-Host "Updated $($file.Name)"
    }
}
