import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import EvidenceGallery from "@/components/projects/EvidenceGallery";
import { Video } from "lucide-react";

import chapter1Img1 from "@/assets/chapter1-img1.jpg";
import chapter1Img2 from "@/assets/chapter1-img2.jpg";
import chapter1Img3 from "@/assets/chapter1-img3.jpg";

const ProjectsPage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-section-bg py-12 lg:py-16">
        <div className="container-academic">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
              Dự án học tập
            </h1>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-body">
              Tổng hợp 6 dự án thực hành tương ứng với 6 chương của môn học, 
              thể hiện quá trình học tập và phát triển kỹ năng số.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16">
        <div className="container-academic">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Project 1 */}
            <ProjectCard
              chapterNumber={1}
              title="Thao tác cơ bản với tệp tin và thư mục"
              objectives={[
                "Hiểu cách tổ chức tệp tin số một cách có hệ thống",
                "Áp dụng cấu trúc thư mục logic cho việc học tập",
              ]}
              process={
                <div className="space-y-3 text-body">
                  <p>
                    Trong bài tập này, tôi thực hiện việc tạo cấu trúc thư mục để 
                    quản lý tài liệu học tập cho các môn học trong chương trình đại 
                    học. Hệ thống thư mục được tổ chức theo các nguyên tắc sau:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Tạo thư mục gốc cho môn học để lưu trữ tài liệu liên quan.</li>
                    <li>Phân chia thư mục con tương ứng với từng môn học: Kinh tế vi mô, Triết học, Xác suất thống kê.</li>
                    <li>Sắp xếp tệp tin trong mỗi thư mục môn học theo mục đích sử dụng, bao gồm: bài giảng, bài tập và tài liệu tham khảo.</li>
                    <li>Thực hiện thao tác tạo, lưu, sao chép và đổi tên tệp tin nhằm làm quen với các thao tác quản lý tập tin cơ bản.</li>
                  </ul>
                </div>
              }
              evidence={
                <EvidenceGallery
                  items={[
                    { type: "image", label: "Ảnh chụp cấu trúc thư mục gốc", caption: "Tạo thư mục gốc cho môn học để lưu trữ tài liệu liên quan.", src: chapter1Img1 },
                    { type: "image", label: "Ảnh chụp thư mục con theo môn học", caption: "Phân chia thư mục con tương ứng với từng môn học: Kinh tế vi mô, Triết học, Xác suất thống kê.", src: chapter1Img2 },
                    { type: "image", label: "Ảnh chụp phân loại tệp tin", caption: "Sắp xếp tệp tin trong mỗi thư mục môn học theo mục đích sử dụng: bài giảng, bài tập, tài liệu tham khảo.", src: chapter1Img3 },
                  ]}
                />
              }
              reflection={
                <div className="space-y-3 text-body">
                  <p>
                    Việc tổ chức tệp tin có hệ thống giúp tôi tiết kiệm thời gian 
                    tìm kiếm tài liệu và tăng hiệu quả học tập. Ban đầu, tôi gặp 
                    khó khăn trong việc quyết định cấu trúc phù hợp, nhưng sau khi 
                    áp dụng nguyên tắc "từ tổng quát đến cụ thể", việc quản lý trở 
                    nên dễ dàng hơn.
                  </p>
                  <p>
                    Kỹ năng này không chỉ hữu ích trong học tập mà còn có thể áp 
                    dụng trong công việc sau này.
                  </p>
                </div>
              }
            />

            {/* Project 2 */}
            <ProjectCard
              chapterNumber={2}
              title="Tìm kiếm và đánh giá thông tin học thuật"
              objectives={[
                "Áp dụng các kỹ thuật tìm kiếm nâng cao",
                "Đánh giá độ tin cậy của các nguồn học thuật",
              ]}
              process={
                <div className="space-y-3 text-body">
                  <p>
                    Dự án này tập trung vào việc phát triển kỹ năng tìm kiếm và 
                    đánh giá thông tin học thuật thông qua các hoạt động:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Sử dụng toán tử tìm kiếm nâng cao: site:, filetype:, "cụm từ chính xác"</li>
                    <li>Tìm kiếm trên các cơ sở dữ liệu học thuật: Google Scholar, ResearchGate</li>
                    <li>Áp dụng tiêu chí CRAAP để đánh giá nguồn tin</li>
                    <li>So sánh độ tin cậy giữa các nguồn khác nhau</li>
                  </ul>
                </div>
              }
              evidence={
                <EvidenceGallery
                  items={[
                    { type: "image", label: "Ảnh chụp kết quả tìm kiếm sử dụng dấu ngoặc kép", caption: "Ảnh chụp kết quả tìm kiếm sử dụng dấu ngoặc kép (\"…\") để tìm kiếm cụm từ chính xác." },
                    { type: "image", label: "Ảnh chụp kết quả tìm kiếm sử dụng toán tử site:edu", caption: "Ảnh chụp kết quả tìm kiếm sử dụng toán tử site:edu để giới hạn nguồn học thuật." },
                    { type: "image", label: "Ảnh chụp kết quả tìm kiếm sử dụng toán tử filetype:pdf", caption: "Ảnh chụp kết quả tìm kiếm sử dụng toán tử filetype:pdf để tìm tài liệu nghiên cứu học thuật." },
                  ]}
                />
              }
              reflection={
                <div className="space-y-3 text-body">
                  <p>
                    So với tìm kiếm thông thường, việc sử dụng các toán tử tìm kiếm 
                    nâng cao giúp lọc kết quả chính xác và có giá trị học thuật cao 
                    hơn. Các nguồn từ trang web giáo dục (.edu) và tài liệu PDF 
                    thường có độ tin cậy cao do được biên soạn bởi các tổ chức học 
                    thuật hoặc nhà nghiên cứu.
                  </p>
                  <p>
                    Việc kết hợp nhiều phương pháp tìm kiếm giúp nâng cao hiệu quả 
                    thu thập thông tin và hạn chế các nguồn không chính thống.
                  </p>
                </div>
              }
            />

            {/* Project 3 */}
            <ProjectCard
              chapterNumber={3}
              title="Viết Prompt hiệu quả cho các tác vụ học tập"
              objectives={[
                "Hiểu cách chất lượng prompt ảnh hưởng đến kết quả AI",
                "Cải thiện khả năng tương tác với công cụ AI",
              ]}
              process={
                <div className="space-y-3 text-body">
                  <p>
                    Dự án này thực hiện so sánh và phân tích cách viết prompt 
                    hiệu quả khi làm việc với các công cụ AI:
                  </p>
                  <div className="bg-section-bg p-4 rounded-lg my-4">
                    <p className="font-medium text-heading mb-2">Prompt ban đầu (kém hiệu quả):</p>
                    <p className="italic text-caption">"Giải thích kinh tế vĩ mô"</p>
                  </div>
                  <div className="bg-section-bg p-4 rounded-lg my-4">
                    <p className="font-medium text-heading mb-2">Prompt cải tiến (hiệu quả):</p>
                    <p className="italic text-caption">
                      "Hãy giải thích 5 khái niệm cơ bản nhất của kinh tế vĩ mô 
                      dành cho sinh viên năm nhất đại học. Mỗi khái niệm cần có 
                      định nghĩa ngắn gọn, ví dụ thực tế từ Việt Nam, và một câu 
                      hỏi tự kiểm tra."
                    </p>
                  </div>
                  <p>
                    Việc cải tiến prompt dựa trên các nguyên tắc: cụ thể hóa yêu 
                    cầu, xác định đối tượng, định dạng kết quả mong muốn.
                  </p>
                </div>
              }
              evidence={
                <EvidenceGallery
                  items={[
                    { type: "image", label: "Ảnh chụp prompt kém hiệu quả", caption: "Prompt ban đầu thiếu ngữ cảnh và yêu cầu cụ thể, dẫn đến kết quả chung chung." },
                    { type: "image", label: "Ảnh chụp kết quả prompt kém", caption: "Phản hồi từ AI với prompt kém hiệu quả - thông tin không có cấu trúc rõ ràng." },
                    { type: "image", label: "Ảnh chụp prompt cải tiến", caption: "Prompt cải tiến với đầy đủ ngữ cảnh, đối tượng và định dạng đầu ra mong muốn." },
                    { type: "image", label: "Ảnh chụp kết quả prompt cải tiến", caption: "Phản hồi từ AI với prompt cải tiến - nội dung có cấu trúc, phù hợp với yêu cầu." },
                    { type: "image", label: "Ảnh chụp bảng so sánh", caption: "Bảng so sánh chi tiết sự khác biệt giữa hai loại prompt và kết quả tương ứng." },
                  ]}
                />
              }
              reflection={
                <div className="space-y-3 text-body">
                  <p>
                    So sánh kết quả từ hai prompt cho thấy sự khác biệt đáng kể. 
                    Prompt cải tiến tạo ra kết quả có cấu trúc rõ ràng, phù hợp 
                    với trình độ người học, và có tính ứng dụng thực tế cao hơn.
                  </p>
                  <p>
                    Nguyên nhân là prompt hiệu quả cung cấp đủ ngữ cảnh, xác định 
                    rõ kỳ vọng đầu ra, và hướng dẫn AI cách tổ chức thông tin.
                  </p>
                </div>
              }
            />

            {/* Project 4 */}
            <ProjectCard
              chapterNumber={4}
              title="Sử dụng công cụ hợp tác trực tuyến trong học tập nhóm"
              objectives={[
                "Sử dụng hiệu quả các công cụ hợp tác trực tuyến",
                "Quản lý làm việc nhóm và tiến độ công việc",
              ]}
              process={
                <div className="space-y-3 text-body">
                  <p>
                    Dự án mô phỏng một dự án học tập nhóm nhỏ, sử dụng các công 
                    cụ hợp tác trực tuyến để quản lý công việc:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Thiết lập không gian làm việc nhóm trên Trello/Notion</li>
                    <li>Phân công nhiệm vụ cho từng thành viên</li>
                    <li>Theo dõi tiến độ thông qua bảng Kanban</li>
                    <li>Chia sẻ tài liệu và phản hồi thông qua các bình luận</li>
                  </ul>
                </div>
              }
              evidence={
                <EvidenceGallery
                  items={[
                    { type: "image", label: "Ảnh chụp thiết lập workspace", caption: "Giao diện thiết lập không gian làm việc nhóm trên Trello/Notion." },
                    { type: "image", label: "Ảnh chụp bảng Kanban", caption: "Bảng Kanban với các cột trạng thái: Cần làm, Đang làm, Hoàn thành." },
                    { type: "image", label: "Ảnh chụp phân công nhiệm vụ", caption: "Giao diện phân công nhiệm vụ cho từng thành viên trong nhóm." },
                    { type: "image", label: "Ảnh chụp theo dõi tiến độ", caption: "Biểu đồ hoặc báo cáo theo dõi tiến độ hoàn thành công việc." },
                    { type: "image", label: "Ảnh chụp chia sẻ tài liệu", caption: "Giao diện chia sẻ tài liệu và bình luận phản hồi giữa các thành viên." },
                    { type: "video", label: "Video hướng dẫn sử dụng", caption: "Video ngắn hướng dẫn quy trình sử dụng công cụ hợp tác trong dự án nhóm." },
                  ]}
                />
              }
              reflection={
                <div className="space-y-3 text-body">
                  <p>
                    Công cụ hợp tác trực tuyến mang lại nhiều lợi ích cho học tập 
                    nhóm: minh bạch hóa công việc, dễ dàng theo dõi tiến độ, và 
                    giảm thiểu xung đột do hiểu lầm về phân công.
                  </p>
                  <p>
                    Tuy nhiên, hiệu quả của công cụ phụ thuộc vào việc tất cả 
                    thành viên cùng sử dụng và cập nhật thường xuyên. Đây là bài 
                    học quan trọng về kỷ luật làm việc nhóm trong môi trường số.
                  </p>
                </div>
              }
            />

            {/* Project 5 */}
            <ProjectCard
              chapterNumber={5}
              title="Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung số"
              objectives={[
                "Áp dụng công cụ AI tạo sinh trong sáng tạo nội dung số",
                "Hiểu quy trình sáng tạo có hỗ trợ AI",
              ]}
              process={
                <div className="space-y-3 text-body">
                  <p>
                    Dự án này thực hiện lập kế hoạch và sản xuất một video giáo 
                    dục ngắn với sự hỗ trợ của công cụ AI:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Lên ý tưởng và viết kịch bản với hỗ trợ AI</li>
                    <li>Sử dụng công cụ AI để tạo hình ảnh minh họa</li>
                    <li>Chỉnh sửa và hoàn thiện nội dung</li>
                    <li>Xuất bản video giáo dục hoàn chỉnh</li>
                  </ul>
                </div>
              }
              evidence={
                <EvidenceGallery
                  defaultOpen={true}
                  items={[
                    { type: "image", label: "Ảnh chụp lên ý tưởng với AI", caption: "Sử dụng AI để brainstorm ý tưởng và xây dựng dàn ý cho video giáo dục." },
                    { type: "image", label: "Ảnh chụp kịch bản video", caption: "Kịch bản video được viết với sự hỗ trợ của công cụ AI." },
                    { type: "image", label: "Ảnh chụp tạo hình ảnh AI", caption: "Sử dụng công cụ AI tạo sinh để tạo hình ảnh minh họa cho video." },
                    { type: "image", label: "Ảnh chụp giao diện chỉnh sửa", caption: "Giao diện phần mềm chỉnh sửa video với các lớp nội dung và timeline." },
                    { type: "image", label: "Ảnh chụp xuất bản video", caption: "Quá trình xuất bản và hoàn thiện video giáo dục cuối cùng." },
                    { type: "video", label: "Video giáo dục hoàn chỉnh", caption: "Video giáo dục hoàn chỉnh (dưới 5 phút) về chủ đề đã chọn." },
                  ]}
                />
              }
              reflection={
                <div className="space-y-3 text-body">
                  <p>
                    AI đóng vai trò như một công cụ hỗ trợ sáng tạo, không thay 
                    thế hoàn toàn quá trình sáng tạo của con người. Vai trò của 
                    người dùng vẫn quan trọng trong việc định hướng, chỉnh sửa, 
                    và đảm bảo chất lượng cuối cùng.
                  </p>
                  <p>
                    Lợi ích rõ rệt là tiết kiệm thời gian ở các bước tạo bản thảo 
                    và ý tưởng. Hạn chế là kết quả AI cần được kiểm tra và chỉnh 
                    sửa để phù hợp với mục đích cụ thể.
                  </p>
                </div>
              }
            />

            {/* Project 6 */}
            <ProjectCard
              chapterNumber={6}
              title="Sử dụng trí tuệ nhân tạo có trách nhiệm trong học tập"
              objectives={[
                "Hiểu các vấn đề đạo đức liên quan đến sử dụng AI",
                "Phát triển nguyên tắc sử dụng AI có trách nhiệm",
              ]}
              process={
                <div className="space-y-3 text-body">
                  <p>
                    Dự án này phân tích các khía cạnh đạo đức và liêm chính học 
                    thuật khi sử dụng AI trong bối cảnh giáo dục:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Nghiên cứu các trường hợp vi phạm liêm chính học thuật liên quan đến AI</li>
                    <li>Phân tích ranh giới giữa hỗ trợ hợp lệ và gian lận</li>
                    <li>Tìm hiểu chính sách AI của các trường đại học</li>
                    <li>Xây dựng bộ nguyên tắc cá nhân</li>
                  </ul>
                </div>
              }
              evidence={
                <EvidenceGallery
                  items={[
                    { type: "image", label: "Sơ đồ nguyên tắc đạo đức AI", caption: "Sơ đồ tổng quan các nguyên tắc đạo đức khi sử dụng AI trong học tập." },
                    { type: "image", label: "Bảng phân tích trường hợp", caption: "Bảng phân tích các trường hợp vi phạm và tuân thủ liêm chính học thuật." },
                    { type: "image", label: "Ảnh chụp chính sách AI trường ĐH", caption: "Tổng hợp chính sách sử dụng AI của các trường đại học trong và ngoài nước." },
                    { type: "image", label: "Infographic ranh giới AI", caption: "Infographic minh họa ranh giới giữa hỗ trợ hợp lệ và gian lận học thuật." },
                    { type: "image", label: "Bộ nguyên tắc cá nhân", caption: "Bộ 7 nguyên tắc cá nhân về sử dụng AI có trách nhiệm được trình bày dạng poster." },
                  ]}
                />
              }
              reflection={
                <div className="space-y-4 text-body">
                  <p className="font-medium text-heading">
                    7 nguyên tắc cá nhân về sử dụng AI có trách nhiệm trong học tập:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>
                      <strong>Minh bạch:</strong> Luôn ghi nhận và trích dẫn khi 
                      sử dụng AI trong bài tập
                    </li>
                    <li>
                      <strong>Hỗ trợ, không thay thế:</strong> Sử dụng AI như 
                      công cụ học tập, không phải để thay thế quá trình tư duy
                    </li>
                    <li>
                      <strong>Kiểm chứng:</strong> Luôn xác minh thông tin từ AI 
                      với nguồn đáng tin cậy
                    </li>
                    <li>
                      <strong>Tuân thủ quy định:</strong> Nắm rõ và tuân theo 
                      chính sách AI của trường và môn học
                    </li>
                    <li>
                      <strong>Phát triển kỹ năng:</strong> Ưu tiên học hỏi kỹ 
                      năng mới thay vì chỉ nhận kết quả có sẵn
                    </li>
                    <li>
                      <strong>Bảo mật thông tin:</strong> Không chia sẻ thông 
                      tin cá nhân hoặc nhạy cảm với AI
                    </li>
                    <li>
                      <strong>Sử dụng có mục đích:</strong> Xác định rõ mục tiêu 
                      trước khi sử dụng công cụ AI
                    </li>
                  </ol>
                  <p className="mt-4">
                    Đạo đức trong sử dụng AI không chỉ là tuân thủ quy định mà 
                    còn là cam kết với sự phát triển bản thân và đóng góp cho 
                    cộng đồng học thuật.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
