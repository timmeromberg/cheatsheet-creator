interface NewLinedSpanProps {
  value?: string;
  className?: string;
}

const NewLinedSpan = ({ value, className }: NewLinedSpanProps) => {
  const replaceWithNewLine = (value: string) => {
    return value.replace(/\n/g, "<br />");
  };

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: replaceWithNewLine(value ? value : ""),
      }}
    />
  );
};

export default NewLinedSpan;
