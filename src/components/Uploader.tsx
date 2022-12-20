interface UploaderProps {
  onFileSelected: (file: FileList) => void;
}

export const Uploader = ({ onFileSelected }: UploaderProps) => {
  return (
    <input
      type="file"
      accept=".csv"
      onChange={async (ev) => {
        const files = ev.target.files;
        if (!files) return;

        onFileSelected(files);
      }}
    />
  );
};
