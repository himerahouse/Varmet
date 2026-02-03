// app/utils/gallery-images.ts
import fs from 'fs';
import path from 'path';


export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function getGalleryImages(): GalleryImage[] {
  const galleryDir = path.join(process.cwd(), '../assets/Images/gallery');
  
  try {
    // Read all files from gallery directory
    const files = fs.readdirSync(galleryDir);
    
    // Filter image files and sort numerically by filename
    const imageFiles = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });
    
    // Create gallery images array
    const galleryImages: GalleryImage[] = imageFiles.map((file, index) => ({
      id: index + 1,
      src: `/assets/Images/gallery/${file}`,
      alt: `Gallery Image ${index + 1}`,
    }));
    
    return galleryImages;
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}