import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'ds4bo0kmt',
  api_key: '957517226212285',
  api_secret: 'r3eo1xhCKnt4f-5eK6zqXy1Ug_M'
});

async function testCloudinary() {
  try {
    console.log('🚀 Testing Cloudinary Integration...\n');

    // 1. Upload a sample image
    console.log('📤 Uploading sample image...');
    const uploadResult = await cloudinary.uploader.upload(
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      {
        folder: 'mpit-coe/test',
        resource_type: 'image'
      }
    );

    console.log('✅ Image uploaded successfully!');
    console.log('Secure URL:', uploadResult.secure_url);
    console.log('Public ID:', uploadResult.public_id);
    console.log('');

    // 2. Get image details
    console.log('📊 Image Metadata:');
    console.log('Width:', uploadResult.width, 'px');
    console.log('Height:', uploadResult.height, 'px');
    console.log('Format:', uploadResult.format);
    console.log('File Size:', uploadResult.bytes, 'bytes');
    console.log('');

    // 3. Transform the image
    // f_auto = automatically selects the best format (WebP, AVIF, etc.)
    // q_auto = automatically optimizes quality for best visual/size balance
    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      transformation: [
        { fetch_format: 'auto' },  // Auto format selection
        { quality: 'auto' }         // Auto quality optimization
      ]
    });

    console.log('✨ Done! Click link below to see optimized version of the image.');
    console.log('Check the size and the format.');
    console.log('Transformed URL:', transformedUrl);
    console.log('');
    console.log('🎉 Cloudinary integration is working perfectly!');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testCloudinary();
