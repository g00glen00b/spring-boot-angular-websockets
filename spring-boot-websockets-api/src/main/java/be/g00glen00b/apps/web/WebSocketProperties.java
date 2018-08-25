package be.g00glen00b.apps.web;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties("app.websocket")
public class WebSocketProperties {
    /**
     * Prefix used for WebSocket destination mappings
     */
    private String applicationPrefix = "/topic";
    /**
     * Prefix used by topics
     */
    private String topicPrefix = "/topic";
    /**
     * Endpoint that can be used to connect to
     */
    private String endpoint = "/live";
    /**
     * Allowed origins
     */
    private String[] allowedOrigins = new String[0];
}
