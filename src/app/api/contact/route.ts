import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  const body = await req.json();
  const { fullname, email, phone, message } = body;

  const { error } = await supabase.from('contact_messages').insert([
    {
      fullname,
      email,
      phone,
      message,
      action_status: 'new',
      is_readed: false,
    },
  ]);

  if (error) {
    console.error('[SUPABASE INSERT ERROR]', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
}
