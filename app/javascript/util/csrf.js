export const csrf = () => {
  const meta = document.querySelector('meta[name="csrf-token"]');
  if (meta == null) {
    return '';
  }
  return meta.content;
};
