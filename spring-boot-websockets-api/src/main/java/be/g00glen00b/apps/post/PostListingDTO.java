package be.g00glen00b.apps.post;

import be.g00glen00b.apps.author.AuthorDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostListingDTO {
    private Long id;
    private String title;
    private LocalDateTime postedAt;
    private AuthorDTO author;
}
