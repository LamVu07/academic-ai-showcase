const Footer = () => {
  return (
    <footer className="bg-section-bg border-t border-border mt-auto">
      <div className="container-academic py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-heading">Vũ Hoàng Lâm</p>
            <p className="text-sm text-caption">
              Trường Đại học Kinh tế, Đại học Quốc gia Hà Nội
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-caption">
              Môn học: Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
            </p>
            <p className="text-xs text-caption mt-1">
              © 2024 - Portfolio Học tập
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
