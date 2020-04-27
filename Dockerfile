FROM node:current-alpine

# Make a specific non-privileged user to actually run the container.
# Node already gives us one, but we want our own.
# NOTE: Having a home directory (-m) prevents some warnings & errors.
RUN addgroup -S appuser && \
    adduser -S -G appuser appuser

RUN mkdir /app && chown appuser:appuser /app 

USER appuser
WORKDIR /app

# We don't actually have any non-dev dependencies;
# if we did, uncomment below:
#COPY package.json /app/
#RUN yarn install

COPY --chown=appuser:appuser . /app 

ENTRYPOINT ["./run.js"]
