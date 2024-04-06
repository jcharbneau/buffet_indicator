# Makefile

# Define COMPOSE_PROJECT_NAME to ensure docker-compose commands affect only project-specific entities
project_name=buffet_indicator

# Start services in development mode
.PHONY: dev
dev:
	COMPOSE_PROJECT_NAME=$(project_name) docker-compose up -d

# Clean up project-specific containers and images without affecting unrelated Docker entities
.PHONY: clean
clean:
	COMPOSE_PROJECT_NAME=$(project_name) docker-compose down
	docker rmi $$(docker images '$(COMPOSE_PROJECT_NAME)_*' -q) --force

# Clean up project-specific containers, images, and volumes
.PHONY: clean-all
clean-all:
	COMPOSE_PROJECT_NAME=$(project_name) docker-compose down -v
	docker rmi $$(docker images '$(COMPOSE_PROJECT_NAME)_*' -q) --force
	docker volume rm $$(docker volume ls -q -f "name=$(COMPOSE_PROJECT_NAME)_*")

# Execute the deployment script for production
#.PHONY: prod
#prod:
#	chmod +x deployment/deploy.sh
#	./deployment/deploy.sh

.PHONY: status
status:
	COMPOSE_PROJECT_NAME=$(project_name) docker-compose ps

# Shut down local development stack
.PHONY: stop
stop:
	COMPOSE_PROJECT_NAME=$(project_name) docker-compose down
