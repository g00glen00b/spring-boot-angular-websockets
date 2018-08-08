package be.g00glen00b.apps.post;

import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@AllArgsConstructor
public class PostController {
	private PostService service;

	@SubscribeMapping("/posts")
	public List<PostListingDTO> findAll() {
		return service.findAll();
	}

	@SubscribeMapping("/posts/{id}")
	public PostInfoDTO findOne(@DestinationVariable Long id) {
		return service.findOne(id);
	}
}
