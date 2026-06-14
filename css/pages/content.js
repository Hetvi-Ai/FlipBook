const SPREADS = [
  {
    left: `
      <div class="pg dark">
        <div class="deco">ML</div>
        <div class="ch-lbl">Welcome</div>
        <h2 class="ch-title">A Visual Guide to Machine Learning</h2>
        <div class="divider"></div>
        <p class="body">Machine Learning is the study of computer algorithms that improve automatically through experience. This book explores fundamental concepts in an interactive 3D format.</p>
        <div class="box">
          <div class="box-title">HOW TO READ THIS BOOK</div>
          <p>Use the navigation controls at the bottom, tap/click the pages, or click the outer buttons to turn pages forward and backward.</p>
        </div>
        <span class="pnum l">i</span>
      </div>
    `,
    right: `
      <div class="pg cover">
        <div class="deco">AI</div>
        <div class="cover-inner">
          <div class="cover-label">Special Edition</div>
          <h1 class="cover-title">MACHINE<br>LEARNING</h1>
          <div class="cover-sub">An Interactive Guide to Modern Intelligent Systems</div>
          <div class="cover-line"></div>
          <div class="cover-ch">Chapter 1: Foundations & Paradigms</div>
          <div class="cover-ch">Chapter 2: Deep Architecture</div>
          <div class="cover-ch">Chapter 3: Pipelines & Ethics</div>
        </div>
      </div>
    `
  },
  {
    left: `
      <div class="pg light">
        <div class="ch-lbl">Chapter 1: Intro</div>
        <h2 class="ch-title">What is Machine Learning?</h2>
        <div class="divider"></div>
        <p class="body">Unlike traditional programming where rules are hand-coded, Machine Learning extracts patterns directly from data. By observing inputs and outputs, algorithms learn the function that maps one to another.</p>
        <div class="formula">Y = f(X) + ε</div>
        <p class="body">Here, <strong>X</strong> represents input features, <strong>Y</strong> represents the prediction, and <strong>ε</strong> is the irreducible random noise.</p>
        <span class="pnum l">2</span>
      </div>
    `,
    right: `
      <div class="pg light">
        <div class="ch-lbl">Chapter 1: Intro</div>
        <h2 class="ch-title">Supervised Learning</h2>
        <div class="divider"></div>
        <p class="body">In Supervised Learning, the algorithm learns from labeled training data. Each sample contains a "ground truth" label. The two primary tasks are:</p>
        <ul class="kl">
          <li><strong>Regression:</strong> Predicting continuous numerical values (e.g., house prices).</li>
          <li><strong>Classification:</strong> Predicting discrete categorical classes (e.g., spam detection).</li>
        </ul>
        <div class="box">
          <div class="box-title">Key Algorithms</div>
          Linear Regression, Logistic Regression, Decision Trees, Support Vector Machines (SVM).
        </div>
        <span class="pnum r">3</span>
      </div>
    `
  },
  {
    left: `
      <div class="pg dark">
        <div class="ch-lbl">Chapter 1: Intro</div>
        <h2 class="ch-title">Unsupervised Learning</h2>
        <div class="divider"></div>
        <p class="body">Unsupervised learning algorithms find structures in unlabeled data. It acts as an exploratory tool to analyze patterns without explicit target guides.</p>
        <ul class="kl">
          <li><strong>Clustering:</strong> Grouping similar data points together (e.g., K-Means customer segmentation).</li>
          <li><strong>Dimensionality Reduction:</strong> Projecting high-dimensional data into fewer features (e.g., PCA).</li>
        </ul>
        <div class="fig">
          <div style="font-size: 16px; margin: 4px 0; letter-spacing: 4px;">🔵 🟢 🟣 &rarr; [ 📦 ]</div>
          <div class="fig-cap">Grouping data points based on feature similarity.</div>
        </div>
        <span class="pnum l">4</span>
      </div>
    `,
    right: `
      <div class="pg dark">
        <div class="ch-lbl">Chapter 1: Intro</div>
        <h2 class="ch-title">Reinforcement Learning</h2>
        <div class="divider"></div>
        <p class="body">Reinforcement Learning (RL) is learning by interaction. An <strong>agent</strong> takes actions in an <strong>environment</strong> to maximize a cumulative <strong>reward</strong> signal.</p>
        <div class="formula">Q(s, a) &larr; Q(s, a) + &alpha;[r + &gamma; max Q(s', a') - Q(s, a)]</div>
        <p class="body">The agent balances exploration (trying new actions) and exploitation (using known high-reward actions) to find the optimal policy.</p>
        <span class="pnum r">5</span>
      </div>
    `
  },
  {
    left: `
      <div class="pg light">
        <div class="ch-lbl">Chapter 2: Deep Architecture</div>
        <h2 class="ch-title">Artificial Neural Networks</h2>
        <div class="divider"></div>
        <p class="body">Inspired by biological brains, Neural Networks consist of interconnected nodes (neurons) organized in layers: Input, Hidden, and Output. Neurons process input by calculating weighted sums and applying an activation function.</p>
        <div class="formula">a = &sigma;( w &middot; x + b )</div>
        <p class="body">Popular activation functions include ReLU, Sigmoid, and Tanh, introducing non-linearity to learn complex functions.</p>
        <span class="pnum l">6</span>
      </div>
    `,
    right: `
      <div class="pg light">
        <div class="ch-lbl">Chapter 2: Deep Architecture</div>
        <h2 class="ch-title">The Power of Deep Learning</h2>
        <div class="divider"></div>
        <p class="body">Deep Learning utilizes networks with many hidden layers (deep networks). This allows the system to automatically learn hierarchical feature representations from raw input.</p>
        <div class="box">
          <div class="box-title">Key Architectures</div>
          <ul class="kl" style="margin-top: 4px;">
            <li><strong>CNNs:</strong> Excels at spatial data like images.</li>
            <li><strong>RNNs / LSTMs:</strong> Excels at sequential data like text.</li>
            <li><strong>Transformers:</strong> Powers modern Large Language Models (LLMs) via self-attention mechanisms.</li>
          </ul>
        </div>
        <span class="pnum r">7</span>
      </div>
    `
  },
  {
    left: `
      <div class="pg dark">
        <div class="ch-lbl">Chapter 3: Pipeline & Ethics</div>
        <h2 class="ch-title">Generalization Challenges</h2>
        <div class="divider"></div>
        <p class="body">A model's goal is to generalize to unseen data. Two common pitfalls are:</p>
        <ul class="kl">
          <li><strong>Underfitting (High Bias):</strong> Model is too simple to capture patterns. Performance is poor on both training and test data.</li>
          <li><strong>Overfitting (High Variance):</strong> Model memorizes training noise. Performance is excellent on training data, but fails on test data.</li>
        </ul>
        <div class="box">
          <div class="box-title">Regularization Solutions</div>
          L1 (Lasso) / L2 (Ridge) penalties, dropout layers, and early stopping help prevent overfitting.
        </div>
        <span class="pnum l">8</span>
      </div>
    `,
    right: `
      <div class="pg dark">
        <div class="ch-lbl">Chapter 3: Pipeline & Ethics</div>
        <h2 class="ch-title">The Machine Learning Pipeline</h2>
        <div class="divider"></div>
        <p class="body">Successful machine learning projects follow a structured lifecycle:</p>
        <div class="fig" style="padding: 8px;">
          <div style="font-size: 10px; font-weight: 600; color: #88aaff; line-height: 1.4;">
            Data Prep &rarr; Feature Engineering &rarr; Model Training &rarr; Evaluation &rarr; Deployment
          </div>
        </div>
        <p class="body">Data preparation is often 80% of the work. Feature engineering creates meaningful representations that make it easier for models to learn.</p>
        <span class="pnum r">9</span>
      </div>
    `
  },
  {
    left: `
      <div class="pg dark">
        <div class="deco">GEN</div>
        <div class="ch-lbl">Chapter 3: Frontier AI</div>
        <h2 class="ch-title">Generative AI &amp; Large Language Models</h2>
        <div class="divider"></div>
        <p class="body">Generative AI creates new content — text, images, code, and audio — by learning the probability distribution of training data. At the core is the <strong>Transformer</strong> architecture with self-attention.</p>
        <div class="formula">Attention(Q,K,V) = softmax( QK&#7488; / &radic;d&#8342; ) &middot; V</div>
        <p class="body">Large Language Models (LLMs) such as GPT and Gemini are pretrained on trillions of tokens to predict the next word — then fine-tuned to follow instructions.</p>
        <span class="pnum l">10</span>
      </div>
    `,
    right: `
      <div class="pg dark">
        <div class="ch-lbl">Chapter 3: Frontier AI</div>
        <h2 class="ch-title">Key Generative Techniques</h2>
        <div class="divider"></div>
        <ul class="kl">
          <li><strong>Fine-Tuning &amp; RLHF:</strong> Adapt pre-trained models via Reinforcement Learning from Human Feedback to safely follow instructions.</li>
          <li><strong>RAG:</strong> Retrieval-Augmented Generation grounds outputs in live external knowledge to reduce hallucinations.</li>
          <li><strong>Diffusion Models:</strong> Power image generators like Stable Diffusion by iteratively denoising Gaussian noise into structured images.</li>
          <li><strong>Prompt Engineering:</strong> Chain-of-thought and few-shot prompting unlock complex reasoning capabilities.</li>
        </ul>
        <div class="box">
          <div class="box-title">Real-World Applications</div>
          Code generation, medical diagnosis, drug discovery, content creation, and AI assistants.
        </div>
        <span class="pnum r">11</span>
      </div>
    `
  }
];

// Expose globally
window.SPREADS = SPREADS;
