import { useCallback } from 'react';

import useWebChatUIContext from './internal/useWebChatUIContext';

export default function useScrollToEnd() {
  const { scrollToEndCallbacksRef } = useWebChatUIContext();

  return useCallback(() => scrollToEndCallbacksRef.current.forEach(callback => callback({ behavior: 'smooth' })), [
    scrollToEndCallbacksRef
  ]);
}
