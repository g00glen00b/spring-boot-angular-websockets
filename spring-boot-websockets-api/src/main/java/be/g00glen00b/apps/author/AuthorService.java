package be.g00glen00b.apps.author;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthorService {
    private AuthorRepository repository;

    public DetailedAuthorDTO findOne(String username) {
        return getDetailedDTO(repository.findByUsername(username).orElseThrow(AuthorNotFoundException::new));
    }

    public DetailedAuthorDTO getDetailedDTO(Author entity) {
        return new DetailedAuthorDTO(entity.getId(), entity.getUsername(), entity.getBio());
    }

    public AuthorDTO getDTO(Author entity) {
        return new AuthorDTO(entity.getId(), entity.getUsername());
    }
}
