package be.g00glen00b.apps.comment;

import be.g00glen00b.apps.author.AuthorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CommentService {
	private AuthorService authorService;

	public CommentDTO getDTO(Comment entity) {
		return new CommentDTO(
			entity.getId(),
			entity.getContent(),
			authorService.getDTO(entity.getAuthor()),
			entity.getPostedAt());
	}
}
