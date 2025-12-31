import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { Video } from "lucide-react";

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
                    Trong dự án này, tôi đã thực hiện việc tạo cấu trúc thư mục 
                    gốc cho toàn bộ tài liệu học tập đại học. Hệ thống được tổ 
                    chức theo các tiêu chí sau:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Tạo thư mục gốc cho từng năm học và học kỳ</li>
                    <li>Phân chia thư mục con theo từng môn học</li>
                    <li>Sắp xếp tệp tin theo loại nội dung (bài giảng, bài tập, tài liệu tham khảo)</li>
                    <li>Áp dụng quy tắc đặt tên tệp thống nhất: [MãMôn]_[TênTài liệu]_[Ngày]</li>
                  </ul>
                </div>
              }
              evidence={
                <div className="grid sm:grid-cols-2 gap-4">
                  <PlaceholderImage label="Ảnh chụp cấu trúc thư mục" />
                  <PlaceholderImage label="Ảnh chụp ví dụ đặt tên tệp" />
                </div>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <PlaceholderImage label="Ảnh chụp truy vấn tìm kiếm" />
                  <PlaceholderImage label="Ảnh chụp kết quả tìm kiếm" />
                </div>
              }
              reflection={
                <div className="space-y-3 text-body">
                  <p>
                    Qua dự án này, tôi nhận ra sự khác biệt rõ rệt giữa nguồn tin 
                    đáng tin cậy và không đáng tin cậy. Các nguồn học thuật như 
                    bài báo từ tạp chí có phản biện (peer-reviewed) cung cấp thông 
                    tin chính xác hơn so với các bài viết trên blog hay mạng xã hội.
                  </p>
                  <p>
                    Kỹ năng này đặc biệt quan trọng trong nghiên cứu học thuật, 
                    giúp đảm bảo chất lượng của các bài luận và đề tài nghiên cứu.
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <PlaceholderImage label="Ảnh chụp prompt và phản hồi 1" />
                  <PlaceholderImage label="Ảnh chụp prompt và phản hồi 2" />
                </div>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <PlaceholderImage label="Ảnh chụp giao diện không gian làm việc" />
                  <PlaceholderImage label="Ảnh chụp bảng quản lý nhiệm vụ" />
                </div>
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
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <PlaceholderImage label="Ảnh chụp quá trình tạo nội dung" />
                    <PlaceholderImage label="Ảnh chụp giao diện chỉnh sửa" />
                  </div>
                  <div className="bg-section-bg rounded-lg p-6 flex items-center justify-center h-48">
                    <div className="text-center">
                      <Video className="w-12 h-12 mx-auto mb-3 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground">
                        Video giáo dục (dưới 5 phút) sẽ được nhúng tại đây
                      </p>
                    </div>
                  </div>
                </div>
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
                <PlaceholderImage 
                  label="Sơ đồ/bảng minh họa các nguyên tắc đạo đức" 
                  height="h-64"
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
