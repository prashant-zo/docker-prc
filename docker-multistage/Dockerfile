FROM python:3.12-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y build-essential

COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# final image
FROM python:3.12-slim

WORKDIR /app

RUN useradd -m appuser

COPY --from=builder /root/.local /home/appuser/.local
COPY . .

RUN chown -R appuser:appuser /app

USER appuser

ENV PATH=/home/appuser/.local/bin:$PATH

EXPOSE 5000

CMD ["python", "app.py"]
