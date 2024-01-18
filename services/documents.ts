import {initsupbase} from '@/utils/supbase-client';


export async function uploadFileToSup(supfilePath, localfilePath){
  let supabaseAdmin = initsupbase()
  let bucketName = process.env.SUPABASE_BUCKET;
  let options = {
    contentType: 'application/pdf'
  };
  const { error } = await supabaseAdmin.storage.from(bucketName).upload(supfilePath, fileData, options);
  if (error) {
    throw error;
  }
  console.log(`File uploaded to ${supfilePath}`);
}
