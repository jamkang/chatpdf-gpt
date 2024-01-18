import { createClient } from '@supabase/supabase-js';

export function initsupbase(){
    let supabaseAdmin
    try {
    // 初始化Supabase客户端
    let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    supabaseAdmin  = createClient(supabaseUrl, supabaseKey);
    } catch (error) {
        console.log('error', error);
        throw new Error('Failed to initialize Pinecone Client');
    }
    return supabaseAdmin
}