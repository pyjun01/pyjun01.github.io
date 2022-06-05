import { useEffect } from 'react';

function NotFoundPage() {
  useEffect(() => {
    window.location.replace('/');
  }, []);

  return null;
}

export default NotFoundPage;
