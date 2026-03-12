from PIL import Image

def create_favicon(input_path, output_path, size=(512, 512), padding=24):
    try:
        # Load the original transparent logo
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Calculate the target dimensions inside the padding
        target_w = size[0] - (padding * 2)
        target_h = size[1] - (padding * 2)
        
        # Calculate aspect ratio
        img_w, img_h = img.size
        ratio = min(target_w / img_w, target_h / img_h)
        
        # Calculate the new exact dimensions while strictly maintaining aspect ratio
        new_w = int(img_w * ratio)
        new_h = int(img_h * ratio)
        
        # Resize using high-quality LANCZOS resampling
        resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Create a pure black background canvas
        bg = Image.new('RGBA', size, (0, 0, 0, 255))
        
        # Calculate exact center coordinates
        offset_x = (size[0] - new_w) // 2
        offset_y = (size[1] - new_h) // 2
        
        # Paste the resized logo onto the black background, using itself as the alpha mask
        bg.paste(resized_img, (offset_x, offset_y), resized_img)
        
        # Save the result as the new icon.png
        bg.save(output_path, "PNG")
        print(f"Successfully created perfect aspect-ratio favicon at {output_path}")
        print(f"Original size: {img_w}x{img_h} -> Resized to: {new_w}x{new_h}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    import os
    # Assuming we run this from the project root
    input_logo = "public/images/bluegloriflhi.png" 
    output_icon = "app/icon.png"
    
    if os.path.exists(input_logo):
        create_favicon(input_logo, output_icon)
    else:
        print(f"Could not find input logo at {input_logo}")
