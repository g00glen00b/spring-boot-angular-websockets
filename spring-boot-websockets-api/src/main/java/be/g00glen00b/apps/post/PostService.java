package be.g00glen00b.apps.post;

import be.g00glen00b.apps.author.AuthorNotFoundException;
import be.g00glen00b.apps.author.AuthorRepository;
import be.g00glen00b.apps.author.AuthorService;
import be.g00glen00b.apps.comment.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PostService {
    private PostRepository repository;
    private CommentService commentService;
    private AuthorService authorService;
    private AuthorRepository authorRepository;

    public List<PostListingDTO> findAll() {
        return repository.findAll().stream().map(this::getListingDTO).collect(Collectors.toList());
    }

    public List<PostListingDTO> findByAuthor(String username) {
        return repository
            .findAllByAuthorUsername(username).stream()
            .map(this::getListingDTO)
            .collect(Collectors.toList());
    }

    @Transactional
    public PostInfoDTO findOne(Long id) {
        return repository.findById(id).map(this::getInfoDTO).orElseThrow(PostNotFoundException::new);
    }

    @Transactional
    public PostListingDTO save(PostInputDTO post) {
        return getListingDTO(repository.saveAndFlush(new Post(
            null,
            post.getTitle(),
            post.getContent(),
            new ArrayList<>(),
            authorRepository.findById(post.getAuthorId()).orElseThrow(AuthorNotFoundException::new),
            LocalDateTime.now())));
    }

    private PostListingDTO getListingDTO(Post entity) {
        return new PostListingDTO(
            entity.getId(),
            entity.getTitle(),
            entity.getPostedAt(),
            authorService.getDTO(entity.getAuthor()));
    }

    private PostInfoDTO getInfoDTO(Post entity) {
        return new PostInfoDTO(
            entity.getId(),
            entity.getTitle(),
            entity.getPostedAt(),
            authorService.getDTO(entity.getAuthor()),
            entity.getContent(),
            entity.getComments().stream().map(commentService::getDTO).collect(Collectors.toList()));
    }
}
