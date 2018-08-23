package be.g00glen00b.apps.comment;

import be.g00glen00b.apps.author.AuthorNotFoundException;
import be.g00glen00b.apps.author.AuthorRepository;
import be.g00glen00b.apps.author.AuthorService;
import be.g00glen00b.apps.post.Post;
import be.g00glen00b.apps.post.PostNotFoundException;
import be.g00glen00b.apps.post.PostRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class CommentService {
    private AuthorService authorService;
    private PostRepository postRepository;
    private AuthorRepository authorRepository;

    @Transactional
    public CommentDTO createComment(Long postId, CommentInputDTO comment) {
        Post post = postRepository.findById(postId).orElseThrow(PostNotFoundException::new);
        Comment entity = new Comment(
            null,
            post,
            authorRepository.findById(comment.getAuthorId()).orElseThrow(AuthorNotFoundException::new),
            comment.getContent(),
            LocalDateTime.now());
        post.getComments().add(entity);
        return getDTO(entity);
    }

    public CommentDTO getDTO(Comment entity) {
        return new CommentDTO(
            entity.getId(),
            entity.getContent(),
            authorService.getDTO(entity.getAuthor()),
            entity.getPostedAt());
    }
}
