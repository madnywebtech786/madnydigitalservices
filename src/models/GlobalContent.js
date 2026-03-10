import mongoose from 'mongoose';

const GlobalContentSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    default: 'global',
  },
  header: {
    brandName: { type: String, default: 'Madeny Digital' },
    navLinks: [{
      name: { type: String },
      href: { type: String },
    }],
  },
  footer: {
    description: { type: String, default: '' },
    address: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    copyright: { type: String, default: '' },
    serviceLinks: [{
      name: { type: String },
      href: { type: String },
    }],
    companyLinks: [{
      name: { type: String },
      href: { type: String },
    }],
    supportLinks: [{
      name: { type: String },
      href: { type: String },
    }],
    socialLinks: [{
      platform: { type: String },
      href: { type: String },
    }],
  },
  socialWidget: {
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    whatsapp: { type: String, default: '' },
  },
}, {
  timestamps: true,
});

export default mongoose.models.GlobalContent || mongoose.model('GlobalContent', GlobalContentSchema);
