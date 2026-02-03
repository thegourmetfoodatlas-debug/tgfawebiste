Add-Type -AssemblyName System.Drawing
$sourcePath = "c:\Users\Lenovo\Desktop\tgfawebsite\assets\peri-peri-butter-chicken-v5.jpg"
$outputPath = "c:\Users\Lenovo\Desktop\tgfawebsite\assets\peri-peri-butter-chicken-v5-square.png"

$srcImg = [System.Drawing.Image]::FromFile($sourcePath)
$maxDim = if ($srcImg.Width -gt $srcImg.Height) { $srcImg.Width } else { $srcImg.Height }

# Create a square bitmap
$bmp = New-Object System.Drawing.Bitmap($maxDim, $maxDim)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::Transparent)

# Center the image
$x = ($maxDim - $srcImg.Width) / 2
$y = ($maxDim - $srcImg.Height) / 2

$g.DrawImage($srcImg, $x, $y, $srcImg.Width, $srcImg.Height)

$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$srcImg.Dispose()

Write-Output "Image squared and saved to $outputPath"
