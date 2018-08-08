package be.g00glen00b.apps.author;

import org.springframework.stereotype.Service;

@Service
public class AuthorService {
	public AuthorDTO getDTO(Author entity) {
		return new AuthorDTO(entity.getId(), entity.getUsername());
	}
}
