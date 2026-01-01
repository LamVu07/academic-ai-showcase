import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import EvidenceGallery from "@/components/projects/EvidenceGallery";
import ImageZoom from "@/components/ui/ImageZoom";
import { Video } from "lucide-react";

import chapter1Img1 from "@/assets/chapter1-img1.jpg";
import chapter1Img2 from "@/assets/chapter1-img2.jpg";
import chapter1Img3 from "@/assets/chapter1-img3.jpg";
import chapter2Img1 from "@/assets/chapter2-img1.jpg";
import chapter2Img2 from "@/assets/chapter2-img2.jpg";
import chapter2Img3 from "@/assets/chapter2-img3.jpg";
import chapter3Img1 from "@/assets/chapter3-img1.jpg";
import chapter3Img2 from "@/assets/chapter3-img2.jpg";
import chapter3Img3 from "@/assets/chapter3-img3.jpg";
import chapter4Img1 from "@/assets/chapter4-img1.jpg";
import chapter4Img2 from "@/assets/chapter4-img2.jpg";
import chapter5Img1 from "@/assets/chapter5-img1.jpg";
import chapter5Img2 from "@/assets/chapter5-img2.jpg";
import chapter5Img3 from "@/assets/chapter5-img3.jpg";
import chapter5Evidence1 from "@/assets/chapter5-evidence1.jpg";
import chapter5Evidence2 from "@/assets/chapter5-evidence2.jpg";
import chapter5Evidence3 from "@/assets/chapter5-evidence3.jpg";

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
                    { type: "image", label: "Ảnh chụp kết quả tìm kiếm sử dụng dấu ngoặc kép", caption: "Ảnh chụp kết quả tìm kiếm sử dụng dấu ngoặc kép (\"…\") để tìm kiếm cụm từ chính xác.", src: chapter2Img1 },
                    { type: "image", label: "Ảnh chụp kết quả tìm kiếm sử dụng toán tử site:edu", caption: "Ảnh chụp kết quả tìm kiếm sử dụng toán tử site:edu để giới hạn nguồn học thuật.", src: chapter2Img2 },
                    { type: "image", label: "Ảnh chụp kết quả tìm kiếm sử dụng toán tử filetype:pdf", caption: "Ảnh chụp kết quả tìm kiếm sử dụng toán tử filetype:pdf để tìm tài liệu nghiên cứu học thuật.", src: chapter2Img3 },
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
                <div className="space-y-4 text-body">
                  <p>
                    Dự án này thực hiện so sánh và phân tích cách viết prompt 
                    hiệu quả khi làm việc với các công cụ AI, sắp xếp theo mức độ tăng dần:
                  </p>
                  
                  <div className="bg-section-bg p-4 rounded-lg border-l-4 border-muted-foreground/30">
                    <p className="font-medium text-heading mb-2">Prompt cơ bản (hiệu quả thấp):</p>
                    <p className="italic text-caption">
                      "Tạo 5 câu hỏi trắc nghiệm về chủ đề Chiến tranh thế giới thứ hai."
                    </p>
                  </div>
                  
                  <div className="bg-section-bg p-4 rounded-lg border-l-4 border-primary/50">
                    <p className="font-medium text-heading mb-2">Prompt cải tiến (hiệu quả trung bình):</p>
                    <p className="italic text-caption">
                      "Tạo 5 câu hỏi ôn tập về chủ đề Chiến tranh thế giới thứ hai, bao gồm:<br/>
                      • 3 câu trắc nghiệm (mỗi câu có 4 lựa chọn và đáp án)<br/>
                      • 2 câu tự luận ngắn<br/>
                      Độ khó ở mức trung bình, phù hợp với học sinh THPT."
                    </p>
                  </div>
                  
                  <div className="bg-section-bg p-4 rounded-lg border-l-4 border-primary">
                    <p className="font-medium text-heading mb-2">Prompt nâng cao (hiệu quả cao):</p>
                    <p className="italic text-caption">
                      "Bạn là giáo viên Lịch sử. Hãy tạo một bộ câu hỏi ôn tập cho chủ đề Chiến tranh thế giới thứ hai theo cấu trúc sau:<br/>
                      • Hai câu trắc nghiệm (mỗi câu có 4 lựa chọn, kèm đáp án và lời giải thích từ 1–2 câu)<br/>
                      • Hai câu tự luận yêu cầu phân tích nguyên nhân và hậu quả<br/>
                      • Một câu hỏi vận dụng thực tế, liên hệ bài học lịch sử với các xung đột hiện đại<br/><br/>
                      Yêu cầu: Trình bày rõ ràng, có đánh số thứ tự câu hỏi, sử dụng ngôn ngữ học thuật."
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
                    { type: "image", src: chapter3Img1, label: "Prompt cơ bản", caption: "Prompt cơ bản tuy nhanh nhưng dễ sinh ra kết quả chung chung." },
                    { type: "image", src: chapter3Img2, label: "Prompt cải tiến", caption: "Prompt cải tiến là điểm cân bằng giữa ngắn gọn và chất lượng." },
                    { type: "image", src: chapter3Img3, label: "Prompt nâng cao", caption: "Prompt nâng cao đầy đủ ngữ cảnh, đối tượng và định dạng đầu ra mong muốn." },
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
                    { type: "image", src: chapter4Img1, label: "Bảng kế hoạch và phân chia công việc nhóm trên Notion", caption: "" },
                    { type: "image", src: chapter4Img2, label: "Theo dõi trạng thái và tiến độ của từng nhiệm vụ trong dự án nhóm", caption: "" },
                  ]}
                />
              }
              reflection={
                <div className="space-y-3 text-body">
                  <p>
                    Trong dự án nhóm, tôi sử dụng Notion như một công cụ quản lý và phối hợp công việc. Toàn bộ dự án được chia thành các nhiệm vụ cụ thể theo từng nội dung nghiên cứu, mỗi nhiệm vụ được gán trạng thái để theo dõi tiến độ thực hiện. Việc tập trung các nhiệm vụ trên một nền tảng chung giúp các thành viên dễ dàng nắm bắt công việc của mình cũng như tiến độ chung của dự án.
                  </p>
                  <p>
                    Từ quá trình trực tiếp sử dụng công cụ hợp tác trực tuyến, tôi nhận thấy các công cụ này mang lại nhiều lợi ích cho học tập nhóm như minh bạch hóa công việc, dễ dàng theo dõi tiến độ và giảm thiểu xung đột do hiểu lầm về phân công. Tuy nhiên, hiệu quả của công cụ phụ thuộc vào việc tất cả thành viên cùng sử dụng và cập nhật thường xuyên. Đây là bài học quan trọng về kỷ luật làm việc nhóm trong môi trường số.
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
                <div className="space-y-4 text-body">
                  <p>
                    Dự án này được thực hiện nhằm lập kế hoạch và sản xuất một video giáo dục ngắn về khái niệm Trí tuệ nhân tạo (AI) với sự hỗ trợ của các công cụ AI tạo sinh. Quá trình thực hiện gồm các bước sau:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Lên ý tưởng và xây dựng kịch bản nội dung video với sự hỗ trợ của ChatGPT, đảm bảo nội dung ngắn gọn, rõ ràng và phù hợp với mục tiêu truyền đạt kiến thức</li>
                    <li>Sử dụng công cụ AI tạo sinh hình ảnh Whisk để thiết kế nhân vật minh họa cho video, làm cơ sở chuẩn hóa hình ảnh nhân vật xuyên suốt nội dung</li>
                    <li>Ứng dụng công cụ AI tạo video Veo 3 để tạo các đoạn video ngắn dựa trên kịch bản và hình ảnh nhân vật, sau đó chỉnh sửa và ghép nối để đảm bảo tính liền mạch</li>
                    <li>Hoàn thiện và xuất bản video giáo dục hoàn chỉnh, sẵn sàng tích hợp vào Portfolio học tập</li>
                  </ul>
                  
                  {/* Process Image Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <figure className="space-y-2">
                      <ImageZoom src={chapter5Img1} alt="Sử dụng ChatGPT để xây dựng kịch bản">
                        <img 
                          src={chapter5Img1} 
                          alt="Sử dụng ChatGPT để xây dựng kịch bản" 
                          className="w-full h-48 object-cover rounded-lg border border-border hover:opacity-90 transition-opacity"
                        />
                      </ImageZoom>
                      <figcaption className="text-sm text-caption text-center font-medium">
                        Sử dụng ChatGPT để xây dựng kịch bản và prompt nội dung video
                      </figcaption>
                    </figure>
                    <figure className="space-y-2">
                      <ImageZoom src={chapter5Img2} alt="Tạo hình ảnh nhân vật bằng Whisk">
                        <img 
                          src={chapter5Img2} 
                          alt="Tạo hình ảnh nhân vật bằng Whisk" 
                          className="w-full h-48 object-cover rounded-lg border border-border hover:opacity-90 transition-opacity"
                        />
                      </ImageZoom>
                      <figcaption className="text-sm text-caption text-center font-medium">
                        Tạo hình ảnh nhân vật minh họa bằng công cụ AI Whisk
                      </figcaption>
                    </figure>
                    <figure className="space-y-2">
                      <ImageZoom src={chapter5Img3} alt="Sử dụng Veo 3 để tạo video">
                        <img 
                          src={chapter5Img3} 
                          alt="Sử dụng Veo 3 để tạo video" 
                          className="w-full h-48 object-cover rounded-lg border border-border hover:opacity-90 transition-opacity"
                        />
                      </ImageZoom>
                      <figcaption className="text-sm text-caption text-center font-medium">
                        Sử dụng Veo 3 để tạo video giáo dục từ kịch bản và hình ảnh nhân vật
                      </figcaption>
                    </figure>
                  </div>
                </div>
              }
              evidence={
                <EvidenceGallery
                  defaultOpen={true}
                  items={[
                    { type: "image", label: "Xây dựng kịch bản và prompt nội dung video bằng ChatGPT", caption: "", src: chapter5Evidence1 },
                    { type: "image", label: "Tạo hình ảnh nhân vật minh họa bằng công cụ AI Whisk", caption: "", src: chapter5Evidence2 },
                    { type: "image", label: "Tạo video giáo dục bằng công cụ AI Veo 3", caption: "", src: chapter5Evidence3 },
                    { type: "video", label: "Video giáo dục hoàn chỉnh", caption: "" },
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
