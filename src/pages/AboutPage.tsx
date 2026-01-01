import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { User, GraduationCap, Target, BookOpen } from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-section-bg py-16 lg:py-24">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
              <img src={avatarImg} alt="Vũ Hoàng Lâm" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
              Vũ Hoàng Lâm
            </h1>
            <p className="text-lg text-body mb-2">Sinh viên ngành Kinh tế</p>
            <p className="text-caption">
              Trường Đại học Kinh tế, Đại học Quốc gia Hà Nội
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Giới thiệu học thuật"
              subtitle="Niềm đam mê với công nghệ số và trí tuệ nhân tạo trong học tập"
            />
            <div className="card-academic animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-2">Về bản thân</h3>
                  <p className="text-body leading-relaxed">
                    Là một sinh viên ngành Kinh tế, tôi nhận thấy tầm quan trọng của việc 
                    ứng dụng công nghệ số trong học tập và nghiên cứu. Với sự phát triển 
                    nhanh chóng của trí tuệ nhân tạo, tôi đặc biệt quan tâm đến việc khai 
                    thác các công cụ AI một cách có trách nhiệm để nâng cao hiệu quả học 
                    tập và nghiên cứu học thuật.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Goals Section */}
      <section className="py-16 bg-section-bg">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Mục tiêu học tập"
              subtitle="Những kỹ năng và kiến thức tôi hướng đến phát triển"
            />
            <div className="grid gap-4">
              {[
                {
                  icon: <GraduationCap className="w-5 h-5 text-primary" />,
                  title: "Phát triển năng lực số",
                  description:
                    "Nâng cao khả năng sử dụng các công cụ và nền tảng số trong học tập và làm việc, từ quản lý tệp tin đến sử dụng các ứng dụng trực tuyến.",
                },
                {
                  icon: <Target className="w-5 h-5 text-primary" />,
                  title: "Kỹ năng tìm kiếm và đánh giá thông tin",
                  description:
                    "Phát triển khả năng tìm kiếm thông tin học thuật hiệu quả và đánh giá độ tin cậy của các nguồn tài liệu trong bối cảnh thông tin số.",
                },
                {
                  icon: <BookOpen className="w-5 h-5 text-primary" />,
                  title: "Sử dụng AI có trách nhiệm",
                  description:
                    "Áp dụng các công cụ trí tuệ nhân tạo một cách có đạo đức và trách nhiệm trong bối cảnh học thuật, đảm bảo tính liêm chính học thuật.",
                },
              ].map((goal, index) => (
                <div
                  key={index}
                  className="card-academic animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {goal.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading mb-2">{goal.title}</h3>
                      <p className="text-body">{goal.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Purpose Section */}
      <section className="py-16">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Mục đích của Portfolio"
              subtitle="Tại sao tôi xây dựng portfolio này"
            />
            <div className="card-academic animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-body mb-6">
                Portfolio học tập này được xây dựng với mục đích rõ ràng và cụ thể, 
                phục vụ cho quá trình học tập và đánh giá trong môn học 
                <strong> "Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo"</strong>.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Thu thập và trình bày tất cả các bài tập của môn học",
                  "Thể hiện kết quả học tập và năng lực số",
                  "Hỗ trợ quá trình đánh giá học thuật",
                  "Phản ánh quá trình học tập xuyên suốt khóa học",
                ].map((purpose, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-section-bg rounded-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-body text-sm">{purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
