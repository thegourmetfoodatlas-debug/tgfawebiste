param([string]$filePath)
Add-Type -AssemblyName System.Drawing
$img1 = [System.Drawing.Image]::FromFile("c:\Users\Lenovo\Desktop\tgfawebsite\assets\nilgiri-nariyali-murgh.png")
Write-Output ("Reference: " + $img1.Width + "x" + $img1.Height)
if ($filePath) {
    if (Test-Path $filePath) {
        $img2 = [System.Drawing.Image]::FromFile($filePath)
        Write-Output ("New: " + $img2.Width + "x" + $img2.Height)
    } else {
        Write-Output "File not found: $filePath"
    }
}
