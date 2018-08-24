package be.g00glen00b.apps.author;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class AuthorController {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    private AuthorService service;

    @SubscribeMapping("/author/{username}/get")
    public DetailedAuthorDTO findOne(@DestinationVariable("username") String username) {
        return service.findOne(username);
    }

    @MessageExceptionHandler
    @SendToUser("/topic/error")
    public String handleException(AuthorNotFoundException ex) {
        logger.debug("Author not found", ex);
        return "The given author was not found";
    }
}
