interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl lg:text-3xl font-semibold text-heading mb-3">
        {title}
      </h2>
      <div className={`section-divider ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mt-4 text-body max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
