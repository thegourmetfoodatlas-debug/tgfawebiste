from PIL import Image
import os

def pad_to_square(image_path, output_path):
    try:
        img = Image.open(image_path)
        width, height = img.size
        
        new_size = max(width, height)
        new_img = Image.new("RGBA", (new_size, new_size), (255, 255, 255, 0)) # Transparent background
        
        # Center the image
        paste_x = (new_size - width) // 2
        paste_y = (new_size - height) // 2
        
        new_img.paste(img, (paste_x, paste_y))
        new_img.save(output_path)
        print(f"Success: {output_path}")
    except Exception as e:
        print(f"Error: {e}")

pad_to_square("assets/peri-peri-butter-chicken-v3.jpg", "assets/peri-peri-butter-chicken-v3-square.png")
