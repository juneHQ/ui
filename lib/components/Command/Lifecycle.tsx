import { useEffect, useRef } from 'react';

export const Lifecycle = ({ onUnmount }: { onUnmount?: () => void }) => {
  let onUnmountRef = useRef(onUnmount);
  useEffect(() => {
    onUnmountRef.current = onUnmount;
  }, [onUnmount]);

  useEffect(() => {
    return () => {
      onUnmountRef.current?.();
    };
  }, []);

  return null;
};
