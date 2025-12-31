import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Award, TrendingUp, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

const ConclusionPage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-section-bg py-12 lg:py-16">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
              Kết luận
            </h1>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-body">
              Tổng kết quá trình học tập và những bài học rút ra từ môn học 
              "Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo"
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Kết quả học tập"
              subtitle="Những kiến thức và kỹ năng đạt được sau khóa học"
            />
            <div className="card-academic animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading text-lg mb-3">
                    Tổng quan kết quả
                  </h3>
                  <p className="text-body leading-relaxed">
                    Sau khi hoàn thành môn học, tôi đã phát triển được nền tảng 
                    vững chắc về năng lực số và hiểu biết về ứng dụng trí tuệ 
                    nhân tạo trong học tập. Các dự án thực hành giúp tôi không 
                    chỉ hiểu lý thuyết mà còn có khả năng áp dụng vào thực tế.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Quản lý và tổ chức tệp tin số hiệu quả",
                  "Tìm kiếm và đánh giá thông tin học thuật",
                  "Viết prompt hiệu quả cho công cụ AI",
                  "Sử dụng công cụ hợp tác trực tuyến",
                  "Sáng tạo nội dung số với hỗ trợ AI",
                  "Áp dụng nguyên tắc sử dụng AI có trách nhiệm",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-section-bg rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-body text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-16 bg-section-bg">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Kỹ năng phát triển"
              subtitle="Các năng lực số và phân tích được rèn luyện"
            />
            <div className="grid gap-4">
              {[
                {
                  icon: <TrendingUp className="w-5 h-5 text-primary" />,
                  title: "Tư duy số (Digital Literacy)",
                  description:
                    "Khả năng sử dụng, đánh giá và tạo ra thông tin số một cách hiệu quả và có trách nhiệm trong môi trường học thuật.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-primary" />,
                  title: "Tư duy phân tích",
                  description:
                    "Phát triển khả năng phân tích vấn đề, đánh giá nguồn thông tin, và đưa ra quyết định dựa trên bằng chứng.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-primary" />,
                  title: "Kỹ năng hợp tác",
                  description:
                    "Làm việc hiệu quả trong môi trường số, sử dụng các công cụ hợp tác trực tuyến để hoàn thành mục tiêu chung.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-primary" />,
                  title: "Tư duy đạo đức công nghệ",
                  description:
                    "Nhận thức về các vấn đề đạo đức trong sử dụng công nghệ và AI, đặc biệt trong bối cảnh học thuật.",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="card-academic animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading mb-2">{skill.title}</h3>
                      <p className="text-body">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Thách thức và giải pháp"
              subtitle="Những khó khăn gặp phải và cách khắc phục"
            />
            <div className="card-academic animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading text-lg mb-3">
                    Khó khăn trong quá trình học tập
                  </h3>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    challenge: "Làm quen với nhiều công cụ số mới",
                    solution:
                      "Dành thời gian thực hành từng công cụ một cách có hệ thống, bắt đầu từ chức năng cơ bản rồi mới đến nâng cao.",
                  },
                  {
                    challenge: "Xác định ranh giới sử dụng AI phù hợp",
                    solution:
                      "Tham khảo chính sách của trường, trao đổi với giảng viên, và xây dựng bộ nguyên tắc cá nhân rõ ràng.",
                  },
                  {
                    challenge: "Quản lý thời gian cho các dự án thực hành",
                    solution:
                      "Lập kế hoạch chi tiết, chia nhỏ nhiệm vụ, và sử dụng công cụ quản lý thời gian để theo dõi tiến độ.",
                  },
                  {
                    challenge: "Đánh giá độ tin cậy của thông tin từ AI",
                    solution:
                      "Luôn kiểm chứng thông tin với nhiều nguồn, ưu tiên nguồn học thuật có phản biện.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-section-bg rounded-lg border-l-4 border-primary"
                  >
                    <p className="font-medium text-heading mb-2">
                      Thách thức: {item.challenge}
                    </p>
                    <p className="text-body text-sm">
                      <strong>Giải pháp:</strong> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-16 bg-section-bg">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Định hướng tương lai"
              subtitle="Cam kết sử dụng AI có trách nhiệm trong học tập"
            />
            <div className="card-academic animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading text-lg mb-3">
                    Phản ánh về tương lai
                  </h3>
                </div>
              </div>
              <div className="space-y-4 text-body">
                <p>
                  Môn học "Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo" 
                  đã trang bị cho tôi không chỉ kỹ năng mà còn cả tư duy cần 
                  thiết để thích ứng với môi trường học tập và làm việc ngày 
                  càng số hóa.
                </p>
                <p>
                  Trong tương lai, tôi cam kết:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Tiếp tục cập nhật kiến thức về công nghệ và AI để không 
                    bị tụt hậu
                  </li>
                  <li>
                    Áp dụng các nguyên tắc đạo đức đã học vào mọi hoạt động 
                    học thuật và nghề nghiệp
                  </li>
                  <li>
                    Chia sẻ kiến thức với bạn bè và cộng đồng về việc sử dụng 
                    AI có trách nhiệm
                  </li>
                  <li>
                    Luôn đặt sự phát triển bản thân và liêm chính học thuật 
                    lên hàng đầu
                  </li>
                </ul>
                <p className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <em>
                    "Công nghệ và AI là công cụ mạnh mẽ, nhưng giá trị thực sự 
                    nằm ở cách chúng ta sử dụng chúng. Với nền tảng kiến thức 
                    từ môn học này, tôi tin rằng mình có thể khai thác sức mạnh 
                    của công nghệ một cách có trách nhiệm và đạo đức."
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConclusionPage;
