import mongoose from 'mongoose';

const PageContentSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    enum: ['home', 'about', 'contact', 'projects', 'services'],
  },
  meta: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    keywords: { type: String, default: '' },
    ogTitle: { type: String, default: '' },
    ogDescription: { type: String, default: '' },
  },
  sections: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
}, {
  timestamps: true,
  strict: false,
});

export default mongoose.models.PageContent || mongoose.model('PageContent', PageContentSchema);
