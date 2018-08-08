package be.g00glen00b.apps.comment;

import be.g00glen00b.apps.author.AuthorDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO {
	private Long id;
	private String content;
	private AuthorDTO author;
	private LocalDate postedAt;
}
