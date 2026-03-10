import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'madney-cms-secret-key-2024';

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export function getTokenFromRequest(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  return null;
}

export function authenticateRequest(request) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return null;
  }
  return verifyToken(token);
}
