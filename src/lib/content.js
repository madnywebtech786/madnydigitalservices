import dbConnect from '@/lib/mongodb';
import PageContent from '@/models/PageContent';
import GlobalContent from '@/models/GlobalContent';

export async function getPageContent(slug) {
  await dbConnect();
  const page = await PageContent.findOne({ slug }).lean();
  if (!page) return null;
  // Convert MongoDB _id to string for serialization
  return JSON.parse(JSON.stringify(page));
}

export async function getGlobalContent() {
  await dbConnect();
  const global = await GlobalContent.findOne({ key: 'global' }).lean();
  if (!global) return null;
  return JSON.parse(JSON.stringify(global));
}
