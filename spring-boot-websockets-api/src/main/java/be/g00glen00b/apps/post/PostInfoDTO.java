package be.g00glen00b.apps.post;

import be.g00glen00b.apps.author.AuthorDTO;
import be.g00glen00b.apps.comment.CommentDTO;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class PostInfoDTO extends PostListingDTO {
    private String content;
    private List<CommentDTO> comments;

    public PostInfoDTO() {
    }

    public PostInfoDTO(Long id, String title, LocalDateTime postedAt, AuthorDTO author, String content, List<CommentDTO> comments) {
        super(id, title, postedAt, author);
        this.content = content;
        this.comments = comments;
    }
}
