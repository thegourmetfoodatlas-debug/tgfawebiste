Add-Type -AssemblyName System.Drawing
$img1 = [System.Drawing.Image]::FromFile("assets/nilgiri-nariyali-murgh.png")
Write-Output ("Reference: " + $img1.Width + "x" + $img1.Height)
$img2 = [System.Drawing.Image]::FromFile("assets/peri-peri-butter-chicken-new.png")
Write-Output ("New: " + $img2.Width + "x" + $img2.Height)
