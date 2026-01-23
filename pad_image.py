from PIL import Image

def pad_to_square(image_path, output_path):
    img = Image.open(image_path)
    width, height = img.size
    
    if width == height:
        img.save(output_path)
        print(f"Image is already square: {width}x{height}")
        return

    new_size = max(width, height)
    new_img = Image.new("RGBA", (new_size, new_size), (255, 255, 255, 0)) # Transparent background
    
    # Center the image
    paste_x = (new_size - width) // 2
    paste_y = (new_size - height) // 2
    
    new_img.paste(img, (paste_x, paste_y))
    new_img.save(output_path)
    print(f"Image squared: {new_size}x{new_size} saved to {output_path}")

try:
    pad_to_square("assets/peri-peri-butter-chicken-new.png", "assets/peri-peri-butter-chicken-square.png")
except Exception as e:
    print(f"Error: {e}")
