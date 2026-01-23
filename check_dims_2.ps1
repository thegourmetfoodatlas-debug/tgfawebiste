Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("assets/mutton-rarha.png")
Write-Output ("Mutton: " + $img.Width + "x" + $img.Height)
