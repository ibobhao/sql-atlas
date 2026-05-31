const state = {
  lang: "zh",
  level: "all",
  category: "all",
  query: "",
};

const copy = {
  zh: {
    tagline: "现代 SQL 学习网站",
    navSyntax: "语法库",
    navRoadmap: "路线",
    navPlaybook: "实战",
    eyebrow: "SQL 专家级知识地图",
    heroTitle: "从 SELECT 到窗口函数，一站式掌握 SQL。",
    heroText: "基础语法、进阶语法、使用说明和真实业务用例全部放在一个现代化学习界面里。",
    startLearning: "开始学习",
    openPlaybook: "查看实战模板",
    metricSyntax: "条核心语法",
    metricLang: "种语言",
    metricStyle: "兼顾主流数据库",
    libraryLabel: "语法库",
    filterTitle: "筛选",
    searchLabel: "搜索语法",
    levelLabel: "难度",
    categoryLabel: "分类",
    stageEyebrow: "基础 + 进阶",
    stageTitle: "SQL 语法全景",
    roadmapEyebrow: "学习路线",
    roadmapTitle: "按查询执行顺序理解 SQL",
    playbookEyebrow: "实战模板",
    playbookTitle: "常见业务问题的 SQL 写法",
    footerText: "为数据分析、后端开发和数据库工程师打造。",
    all: "全部",
    basic: "基础",
    intermediate: "进阶",
    advanced: "高级",
    syntax: "语法",
    useCase: "用例",
    usage: "使用说明",
    example: "示例",
    results: "个结果",
  },
  en: {
    tagline: "Modern SQL learning site",
    navSyntax: "Syntax",
    navRoadmap: "Roadmap",
    navPlaybook: "Playbook",
    eyebrow: "Expert SQL knowledge map",
    heroTitle: "Master SQL from SELECT to window functions.",
    heroText: "Core syntax, advanced patterns, usage notes, and business examples in one modern learning interface.",
    startLearning: "Start learning",
    openPlaybook: "Open playbook",
    metricSyntax: "core syntax topics",
    metricLang: "languages",
    metricStyle: "for major databases",
    libraryLabel: "Library",
    filterTitle: "Filters",
    searchLabel: "Search syntax",
    levelLabel: "Level",
    categoryLabel: "Category",
    stageEyebrow: "Basics + advanced",
    stageTitle: "SQL syntax atlas",
    roadmapEyebrow: "Learning path",
    roadmapTitle: "Understand SQL by execution order",
    playbookEyebrow: "Playbook",
    playbookTitle: "SQL templates for common business questions",
    footerText: "Built for analysts, backend developers, and database engineers.",
    all: "All",
    basic: "Basic",
    intermediate: "Intermediate",
    advanced: "Advanced",
    syntax: "Syntax",
    useCase: "Use case",
    usage: "How to use",
    example: "Example",
    results: "results",
  },
  fr: {
    tagline: "Site moderne pour apprendre SQL",
    navSyntax: "Syntaxe",
    navRoadmap: "Parcours",
    navPlaybook: "Cas pratiques",
    eyebrow: "Carte experte de SQL",
    heroTitle: "Maitrisez SQL, de SELECT aux fonctions fenetres.",
    heroText: "Syntaxe de base, notions avancees, conseils d'usage et cas metier dans une interface moderne.",
    startLearning: "Commencer",
    openPlaybook: "Voir les modeles",
    metricSyntax: "notions SQL",
    metricLang: "langues",
    metricStyle: "pour les SGBD majeurs",
    libraryLabel: "Bibliotheque",
    filterTitle: "Filtres",
    searchLabel: "Rechercher",
    levelLabel: "Niveau",
    categoryLabel: "Categorie",
    stageEyebrow: "Bases + avance",
    stageTitle: "Atlas de la syntaxe SQL",
    roadmapEyebrow: "Parcours",
    roadmapTitle: "Comprendre SQL par ordre d'execution",
    playbookEyebrow: "Modeles pratiques",
    playbookTitle: "Requetes SQL pour questions metier courantes",
    footerText: "Concu pour analystes, developpeurs backend et ingenieurs base de donnees.",
    all: "Tout",
    basic: "Base",
    intermediate: "Intermediaire",
    advanced: "Avance",
    syntax: "Syntaxe",
    useCase: "Cas d'usage",
    usage: "Mode d'emploi",
    example: "Exemple",
    results: "resultats",
  },
};

const categories = [
  { id: "query", zh: "查询基础", en: "Query basics", fr: "Bases de requete" },
  { id: "filter", zh: "过滤与排序", en: "Filtering & sorting", fr: "Filtrer et trier" },
  { id: "join", zh: "连接", en: "Joins", fr: "Jointures" },
  { id: "aggregate", zh: "聚合", en: "Aggregation", fr: "Agregation" },
  { id: "write", zh: "写入与修改", en: "Write & change", fr: "Ecriture" },
  { id: "schema", zh: "表结构", en: "Schema", fr: "Schema" },
  { id: "advanced", zh: "高级查询", en: "Advanced query", fr: "Requete avancee" },
  { id: "performance", zh: "性能与治理", en: "Performance & control", fr: "Performance" },
];

const syntaxItems = [
  item("select", "basic", "query", "SELECT", {
    zh: ["选择要返回的列。", "从客户表中取出姓名和邮箱。", "只写业务需要的列，避免 SELECT * 在生产查询中造成多余 I/O。"],
    en: ["Choose the columns returned by a query.", "Return names and emails from customers.", "Select only needed columns; avoid SELECT * in production queries."],
    fr: ["Choisir les colonnes retournees.", "Retourner les noms et emails des clients.", "Ne selectionnez que les colonnes utiles; evitez SELECT * en production."],
  }, "SELECT name, email\nFROM customers;"),
  item("from", "basic", "query", "FROM", {
    zh: ["指定数据来源。", "从订单表读取订单记录。", "FROM 可以引用表、视图、CTE 或子查询，并为它们设置别名。"],
    en: ["Specify the data source.", "Read order records from the orders table.", "FROM can reference tables, views, CTEs, or subqueries, usually with aliases."],
    fr: ["Indiquer la source de donnees.", "Lire les commandes depuis la table orders.", "FROM peut viser tables, vues, CTE ou sous-requetes avec alias."],
  }, "SELECT o.order_id, o.total\nFROM orders AS o;"),
  item("where", "basic", "filter", "WHERE", {
    zh: ["按行过滤数据。", "查找已付款订单。", "WHERE 在聚合前执行，适合过滤明细行。"],
    en: ["Filter rows before aggregation.", "Find paid orders.", "WHERE runs before grouping and is best for row-level filters."],
    fr: ["Filtrer les lignes avant agregation.", "Trouver les commandes payees.", "WHERE s'applique avant le groupement."],
  }, "SELECT order_id, total\nFROM orders\nWHERE status = 'paid';"),
  item("order-by", "basic", "filter", "ORDER BY", {
    zh: ["对结果排序。", "按销售额从高到低查看订单。", "ASC 升序，DESC 降序；分页时要使用稳定排序列。"],
    en: ["Sort result rows.", "View orders by revenue descending.", "Use ASC or DESC; pagination needs a stable ordering column."],
    fr: ["Trier les resultats.", "Voir les commandes par montant decroissant.", "Utilisez ASC ou DESC; la pagination demande un tri stable."],
  }, "SELECT order_id, total\nFROM orders\nORDER BY total DESC, order_id ASC;"),
  item("limit", "basic", "filter", "LIMIT / OFFSET", {
    zh: ["限制返回行数并跳过部分结果。", "取前 20 条最新订单。", "MySQL/PostgreSQL 用 LIMIT；SQL Server 常用 TOP 或 OFFSET FETCH。"],
    en: ["Limit rows and optionally skip rows.", "Get the 20 latest orders.", "MySQL/PostgreSQL use LIMIT; SQL Server often uses TOP or OFFSET FETCH."],
    fr: ["Limiter le nombre de lignes et en sauter.", "Obtenir les 20 dernieres commandes.", "MySQL/PostgreSQL utilisent LIMIT; SQL Server TOP ou OFFSET FETCH."],
  }, "SELECT order_id, created_at\nFROM orders\nORDER BY created_at DESC\nLIMIT 20 OFFSET 0;"),
  item("distinct", "basic", "filter", "DISTINCT", {
    zh: ["去除重复结果。", "列出所有出现过订单的城市。", "DISTINCT 作用于所选列的组合，列越多越不容易去重。"],
    en: ["Remove duplicate result rows.", "List cities that have orders.", "DISTINCT applies to the selected column combination."],
    fr: ["Supprimer les doublons.", "Lister les villes ayant des commandes.", "DISTINCT porte sur la combinaison des colonnes selectionnees."],
  }, "SELECT DISTINCT shipping_city\nFROM orders;"),
  item("case", "intermediate", "query", "CASE", {
    zh: ["在查询中做条件表达式。", "把订单金额分成高、中、低档。", "CASE 返回单个值，常用于标签、分桶和条件聚合。"],
    en: ["Create conditional expressions.", "Bucket orders into high, medium, and low value.", "CASE returns one value and is useful for labels, buckets, and conditional aggregates."],
    fr: ["Creer des expressions conditionnelles.", "Classer les commandes en niveaux.", "CASE retourne une valeur, utile pour etiquettes et agregations conditionnelles."],
  }, "SELECT order_id,\n       CASE\n         WHEN total >= 1000 THEN 'high'\n         WHEN total >= 200 THEN 'medium'\n         ELSE 'low'\n       END AS value_band\nFROM orders;"),
  item("inner-join", "basic", "join", "INNER JOIN", {
    zh: ["只保留两表都匹配的行。", "查看订单及其客户信息。", "JOIN 条件应写在 ON 中，明确表别名可以避免列名冲突。"],
    en: ["Keep rows that match in both tables.", "Show orders with customer details.", "Put join conditions in ON and use aliases to avoid ambiguity."],
    fr: ["Garder les lignes presentes dans les deux tables.", "Afficher commandes et clients.", "Placez la condition dans ON et utilisez des alias."],
  }, "SELECT o.order_id, c.name, o.total\nFROM orders AS o\nINNER JOIN customers AS c\n  ON c.customer_id = o.customer_id;"),
  item("left-join", "intermediate", "join", "LEFT JOIN", {
    zh: ["保留左表全部行，右表无匹配时补 NULL。", "找出没有下单的客户。", "过滤右表字段时要小心 WHERE 会把 LEFT JOIN 变成类似 INNER JOIN。"],
    en: ["Keep all left rows and fill unmatched right rows with NULL.", "Find customers with no orders.", "Be careful: WHERE filters on right-table columns can cancel the outer join effect."],
    fr: ["Garder toutes les lignes de gauche et NULL a droite sans correspondance.", "Trouver les clients sans commande.", "Un WHERE sur la table droite peut annuler l'effet externe."],
  }, "SELECT c.customer_id, c.name\nFROM customers AS c\nLEFT JOIN orders AS o\n  ON o.customer_id = c.customer_id\nWHERE o.order_id IS NULL;"),
  item("self-join", "intermediate", "join", "SELF JOIN", {
    zh: ["同一张表自己连接自己。", "查询员工及其经理。", "必须使用不同别名表示不同角色。"],
    en: ["Join a table to itself.", "Show employees and their managers.", "Use different aliases for each role."],
    fr: ["Joindre une table avec elle-meme.", "Afficher employes et managers.", "Utilisez des alias distincts pour chaque role."],
  }, "SELECT e.name AS employee, m.name AS manager\nFROM employees AS e\nLEFT JOIN employees AS m\n  ON m.employee_id = e.manager_id;"),
  item("group-by", "basic", "aggregate", "GROUP BY", {
    zh: ["按维度汇总行。", "统计每个客户的订单数。", "SELECT 中非聚合列通常必须出现在 GROUP BY 中。"],
    en: ["Aggregate rows by dimensions.", "Count orders per customer.", "Non-aggregated selected columns usually must appear in GROUP BY."],
    fr: ["Agreger les lignes par dimension.", "Compter les commandes par client.", "Les colonnes non agregees selectionnees doivent etre dans GROUP BY."],
  }, "SELECT customer_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY customer_id;"),
  item("having", "intermediate", "aggregate", "HAVING", {
    zh: ["过滤聚合后的分组。", "找出订单数超过 5 的客户。", "WHERE 过滤明细，HAVING 过滤聚合结果。"],
    en: ["Filter groups after aggregation.", "Find customers with more than five orders.", "WHERE filters rows; HAVING filters aggregate groups."],
    fr: ["Filtrer les groupes apres agregation.", "Trouver les clients avec plus de cinq commandes.", "WHERE filtre les lignes; HAVING filtre les groupes."],
  }, "SELECT customer_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY customer_id\nHAVING COUNT(*) > 5;"),
  item("aggregate-functions", "basic", "aggregate", "COUNT / SUM / AVG / MIN / MAX", {
    zh: ["计算数量、总和、平均值、最小值和最大值。", "统计每日收入和订单数。", "COUNT(*) 计行数；COUNT(column) 通常忽略 NULL。"],
    en: ["Compute counts, totals, averages, minimums, and maximums.", "Calculate daily revenue and order count.", "COUNT(*) counts rows; COUNT(column) usually ignores NULL."],
    fr: ["Calculer nombres, sommes, moyennes, minima et maxima.", "Calculer revenu et commandes par jour.", "COUNT(*) compte les lignes; COUNT(colonne) ignore souvent NULL."],
  }, "SELECT CAST(created_at AS DATE) AS day,\n       COUNT(*) AS orders,\n       SUM(total) AS revenue,\n       AVG(total) AS avg_order\nFROM orders\nGROUP BY CAST(created_at AS DATE);"),
  item("insert", "basic", "write", "INSERT", {
    zh: ["向表中插入新行。", "新增一个客户。", "明确列名可以避免表结构变化导致插入错误。"],
    en: ["Insert new rows into a table.", "Add a new customer.", "Always list columns to avoid errors when schema changes."],
    fr: ["Inserer de nouvelles lignes.", "Ajouter un client.", "Listez les colonnes pour eviter les erreurs de schema."],
  }, "INSERT INTO customers (name, email, created_at)\nVALUES ('Ada Chen', 'ada@example.com', CURRENT_TIMESTAMP);"),
  item("update", "basic", "write", "UPDATE", {
    zh: ["修改已有行。", "把待支付订单改为已取消。", "UPDATE 前先用相同 WHERE 写 SELECT 检查影响范围。"],
    en: ["Modify existing rows.", "Cancel pending orders.", "Run a SELECT with the same WHERE before updating critical data."],
    fr: ["Modifier des lignes existantes.", "Annuler les commandes en attente.", "Testez avec SELECT et le meme WHERE avant une mise a jour critique."],
  }, "UPDATE orders\nSET status = 'cancelled', updated_at = CURRENT_TIMESTAMP\nWHERE status = 'pending'\n  AND created_at < CURRENT_DATE - INTERVAL '7 day';"),
  item("delete", "basic", "write", "DELETE", {
    zh: ["删除行。", "清理过期会话。", "必须带精确 WHERE；需要保留历史时优先软删除。"],
    en: ["Delete rows.", "Clean expired sessions.", "Use a precise WHERE; prefer soft deletes when history matters."],
    fr: ["Supprimer des lignes.", "Nettoyer les sessions expirees.", "Utilisez un WHERE precis; preferez la suppression logique si l'historique compte."],
  }, "DELETE FROM sessions\nWHERE expires_at < CURRENT_TIMESTAMP;"),
  item("create-table", "basic", "schema", "CREATE TABLE", {
    zh: ["创建表和列定义。", "建立订单明细表。", "定义主键、数据类型、NOT NULL 和默认值是建模基础。"],
    en: ["Create tables and column definitions.", "Create an order items table.", "Primary keys, data types, NOT NULL, and defaults are schema basics."],
    fr: ["Creer tables et colonnes.", "Creer une table de lignes de commande.", "Cles primaires, types, NOT NULL et valeurs par defaut sont essentiels."],
  }, "CREATE TABLE order_items (\n  order_item_id BIGINT PRIMARY KEY,\n  order_id BIGINT NOT NULL,\n  product_id BIGINT NOT NULL,\n  quantity INTEGER NOT NULL CHECK (quantity > 0),\n  unit_price DECIMAL(12, 2) NOT NULL\n);"),
  item("alter-table", "intermediate", "schema", "ALTER TABLE", {
    zh: ["修改表结构。", "给客户表增加会员等级字段。", "生产环境修改大表前要评估锁、回填和回滚方案。"],
    en: ["Change table structure.", "Add a membership tier to customers.", "For large production tables, assess locks, backfills, and rollback."],
    fr: ["Modifier la structure d'une table.", "Ajouter un niveau client.", "Sur grosses tables, evaluez verrous, remplissage et retour arriere."],
  }, "ALTER TABLE customers\nADD COLUMN loyalty_tier VARCHAR(20) DEFAULT 'standard';"),
  item("constraints", "intermediate", "schema", "PRIMARY KEY / FOREIGN KEY / CHECK", {
    zh: ["用约束保证数据质量。", "防止订单指向不存在的客户。", "约束让数据库承担一致性检查，比只依赖应用代码更可靠。"],
    en: ["Protect data quality with constraints.", "Prevent orders from referencing missing customers.", "Constraints keep consistency in the database, not only in app code."],
    fr: ["Garantir la qualite avec des contraintes.", "Eviter des commandes vers clients inexistants.", "La base assure la coherence, pas seulement l'application."],
  }, "ALTER TABLE orders\nADD CONSTRAINT fk_orders_customer\nFOREIGN KEY (customer_id)\nREFERENCES customers(customer_id);"),
  item("cte", "intermediate", "advanced", "WITH / CTE", {
    zh: ["把复杂查询拆成可读步骤。", "先汇总客户收入，再筛选高价值客户。", "CTE 适合表达查询逻辑；性能是否物化取决于数据库。"],
    en: ["Break complex queries into readable steps.", "Aggregate customer revenue, then filter high-value customers.", "CTE materialization behavior depends on the database."],
    fr: ["Decouper une requete complexe en etapes lisibles.", "Agreger le revenu client puis filtrer.", "La materialisation d'une CTE depend du SGBD."],
  }, "WITH customer_revenue AS (\n  SELECT customer_id, SUM(total) AS revenue\n  FROM orders\n  GROUP BY customer_id\n)\nSELECT customer_id, revenue\nFROM customer_revenue\nWHERE revenue >= 10000;"),
  item("subquery", "intermediate", "advanced", "Subquery", {
    zh: ["在查询中嵌套查询。", "找出高于平均金额的订单。", "相关子查询会逐行依赖外层，必要时可改写为 JOIN 或窗口函数。"],
    en: ["Nest a query inside another query.", "Find orders above average value.", "Correlated subqueries depend on outer rows; joins or windows may be faster."],
    fr: ["Imbriquer une requete dans une autre.", "Trouver les commandes au-dessus de la moyenne.", "Les sous-requetes correlees peuvent etre remplacees par jointures ou fenetres."],
  }, "SELECT order_id, total\nFROM orders\nWHERE total > (SELECT AVG(total) FROM orders);"),
  item("window-functions", "advanced", "advanced", "Window Functions", {
    zh: ["在不合并行的情况下做分区计算。", "计算每个客户订单的时间排名。", "PARTITION BY 定义窗口分组，ORDER BY 定义窗口内顺序。"],
    en: ["Calculate across partitions without collapsing rows.", "Rank each customer's orders by time.", "PARTITION BY defines groups; ORDER BY defines order inside each window."],
    fr: ["Calculer par partition sans reduire les lignes.", "Classer les commandes d'un client.", "PARTITION BY definit les groupes; ORDER BY l'ordre interne."],
  }, "SELECT customer_id,\n       order_id,\n       created_at,\n       ROW_NUMBER() OVER (\n         PARTITION BY customer_id\n         ORDER BY created_at DESC\n       ) AS order_rank\nFROM orders;"),
  item("lag-lead", "advanced", "advanced", "LAG / LEAD", {
    zh: ["访问上一行或下一行。", "比较本月收入和上月收入。", "常与时间序列、留存分析、环比计算一起使用。"],
    en: ["Read previous or next row values.", "Compare this month's revenue with last month.", "Useful for time series, retention, and period-over-period metrics."],
    fr: ["Lire la ligne precedente ou suivante.", "Comparer le revenu du mois au precedent.", "Utile pour series temporelles et evolution periode a periode."],
  }, "SELECT month,\n       revenue,\n       LAG(revenue) OVER (ORDER BY month) AS previous_revenue,\n       revenue - LAG(revenue) OVER (ORDER BY month) AS revenue_delta\nFROM monthly_revenue;"),
  item("set-ops", "intermediate", "advanced", "UNION / INTERSECT / EXCEPT", {
    zh: ["合并或比较两个查询结果集。", "合并线上和线下客户名单。", "UNION 去重，UNION ALL 保留重复且通常更快。"],
    en: ["Combine or compare query result sets.", "Merge online and offline customer lists.", "UNION removes duplicates; UNION ALL keeps them and is usually faster."],
    fr: ["Combiner ou comparer des resultats.", "Fusionner clients en ligne et hors ligne.", "UNION dedoublonne; UNION ALL conserve les doublons et va souvent plus vite."],
  }, "SELECT email FROM online_customers\nUNION\nSELECT email FROM store_customers;"),
  item("recursive-cte", "advanced", "advanced", "Recursive CTE", {
    zh: ["递归处理层级数据。", "展开组织架构或分类树。", "必须有锚点查询和递归查询，并设置终止条件。"],
    en: ["Process hierarchical data recursively.", "Expand an org chart or category tree.", "Requires an anchor query, recursive query, and stopping condition."],
    fr: ["Traiter recursivement des hierarchies.", "Derouler organigramme ou arbre de categories.", "Il faut une ancre, une partie recursive et une condition d'arret."],
  }, "WITH RECURSIVE org AS (\n  SELECT employee_id, manager_id, name, 1 AS depth\n  FROM employees\n  WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.employee_id, e.manager_id, e.name, org.depth + 1\n  FROM employees AS e\n  JOIN org ON e.manager_id = org.employee_id\n)\nSELECT * FROM org;"),
  item("transactions", "advanced", "performance", "BEGIN / COMMIT / ROLLBACK", {
    zh: ["把多条写操作作为一个原子单元。", "创建订单并扣减库存，要么全部成功，要么全部撤销。", "异常时 ROLLBACK；成功后 COMMIT。"],
    en: ["Treat multiple writes as one atomic unit.", "Create an order and reduce inventory together.", "ROLLBACK on failure; COMMIT on success."],
    fr: ["Traiter plusieurs ecritures comme une unite atomique.", "Creer une commande et diminuer le stock ensemble.", "ROLLBACK en cas d'echec; COMMIT en cas de succes."],
  }, "BEGIN;\n\nINSERT INTO orders (order_id, customer_id, total)\nVALUES (9001, 42, 199.00);\n\nUPDATE inventory\nSET quantity = quantity - 1\nWHERE product_id = 7;\n\nCOMMIT;"),
  item("indexes", "advanced", "performance", "CREATE INDEX", {
    zh: ["为查询加速创建访问路径。", "加速按客户和创建时间查订单。", "索引提升读取，但会增加写入成本；优先给高选择性过滤列和连接列建索引。"],
    en: ["Create access paths to speed up queries.", "Speed up order lookup by customer and date.", "Indexes improve reads but add write cost; index selective filters and join keys."],
    fr: ["Creer des chemins d'acces pour accelerer.", "Accelerer la recherche par client et date.", "Les index aident la lecture mais coutent en ecriture."],
  }, "CREATE INDEX idx_orders_customer_created\nON orders (customer_id, created_at DESC);"),
  item("views", "intermediate", "schema", "CREATE VIEW", {
    zh: ["保存可复用查询为虚拟表。", "为报表提供已清洗的订单视图。", "视图简化访问和权限控制；复杂视图仍需关注性能。"],
    en: ["Save a reusable query as a virtual table.", "Expose cleaned orders for reporting.", "Views simplify access and permissions; complex views still need performance care."],
    fr: ["Enregistrer une requete reutilisable comme table virtuelle.", "Exposer des commandes nettoyees pour reporting.", "Les vues simplifient acces et droits; surveillez la performance."],
  }, "CREATE VIEW paid_orders AS\nSELECT order_id, customer_id, total, paid_at\nFROM orders\nWHERE status = 'paid';"),
  item("json", "advanced", "advanced", "JSON Query", {
    zh: ["读取半结构化 JSON 字段。", "从事件属性中取出渠道。", "JSON 语法差异较大，PostgreSQL、MySQL、SQL Server 写法不同。"],
    en: ["Read semi-structured JSON fields.", "Extract a campaign channel from event properties.", "JSON syntax varies across PostgreSQL, MySQL, and SQL Server."],
    fr: ["Lire des champs JSON semi-structures.", "Extraire un canal depuis des proprietes d'evenement.", "La syntaxe JSON varie selon PostgreSQL, MySQL et SQL Server."],
  }, "SELECT event_id,\n       properties ->> 'channel' AS channel\nFROM events\nWHERE properties ->> 'campaign' = 'spring_sale';"),
  item("upsert", "advanced", "write", "UPSERT / MERGE", {
    zh: ["存在则更新，不存在则插入。", "同步每日商品库存快照。", "PostgreSQL 用 ON CONFLICT，SQL Server/Oracle 常用 MERGE，MySQL 用 ON DUPLICATE KEY UPDATE。"],
    en: ["Insert when missing, update when present.", "Sync daily product inventory snapshots.", "PostgreSQL uses ON CONFLICT; SQL Server/Oracle use MERGE; MySQL uses ON DUPLICATE KEY UPDATE."],
    fr: ["Inserer si absent, mettre a jour si present.", "Synchroniser le stock quotidien.", "PostgreSQL utilise ON CONFLICT; SQL Server/Oracle MERGE; MySQL ON DUPLICATE KEY UPDATE."],
  }, "INSERT INTO inventory (product_id, quantity)\nVALUES (7, 120)\nON CONFLICT (product_id)\nDO UPDATE SET quantity = EXCLUDED.quantity;"),
  item("explain", "advanced", "performance", "EXPLAIN", {
    zh: ["查看数据库如何执行查询。", "诊断慢查询是否走索引。", "关注扫描方式、连接方式、估算行数和实际行数差距。"],
    en: ["Inspect how the database executes a query.", "Diagnose whether a slow query uses indexes.", "Watch scan type, join type, estimated rows, and actual rows."],
    fr: ["Inspecter le plan d'execution.", "Diagnostiquer l'usage d'index.", "Regardez scans, jointures, lignes estimees et reelles."],
  }, "EXPLAIN ANALYZE\nSELECT *\nFROM orders\nWHERE customer_id = 42\nORDER BY created_at DESC;"),
];

const pipelineItems = [
  ["FROM", "选择表、视图或子查询", "Choose tables, views, or subqueries", "Choisir tables, vues ou sous-requetes"],
  ["WHERE", "过滤明细行", "Filter raw rows", "Filtrer les lignes"],
  ["GROUP BY", "按维度聚合", "Aggregate by dimensions", "Agreger par dimensions"],
  ["HAVING", "过滤聚合结果", "Filter grouped results", "Filtrer les groupes"],
  ["SELECT", "计算返回列", "Compute returned columns", "Calculer les colonnes"],
  ["ORDER BY", "排序并分页", "Sort and paginate", "Trier et paginer"],
];

const playbookItems = [
  play("cohort", {
    zh: ["留存分析", "按用户注册月和回访月统计留存。"],
    en: ["Retention cohort", "Track retention by signup month and return month."],
    fr: ["Cohorte de retention", "Suivre la retention par mois d'inscription et de retour."],
  }, "WITH first_seen AS (\n  SELECT user_id, MIN(DATE_TRUNC('month', created_at)) AS cohort_month\n  FROM events\n  GROUP BY user_id\n)\nSELECT f.cohort_month,\n       DATE_TRUNC('month', e.created_at) AS active_month,\n       COUNT(DISTINCT e.user_id) AS active_users\nFROM first_seen AS f\nJOIN events AS e ON e.user_id = f.user_id\nGROUP BY f.cohort_month, DATE_TRUNC('month', e.created_at);"),
  play("funnel", {
    zh: ["漏斗转化", "统计浏览、加购、支付三个步骤的人数。"],
    en: ["Funnel conversion", "Count users who viewed, added to cart, and paid."],
    fr: ["Conversion d'entonnoir", "Compter vues, ajouts panier et paiements."],
  }, "SELECT\n  COUNT(DISTINCT CASE WHEN event_name = 'view' THEN user_id END) AS viewed,\n  COUNT(DISTINCT CASE WHEN event_name = 'add_to_cart' THEN user_id END) AS added,\n  COUNT(DISTINCT CASE WHEN event_name = 'purchase' THEN user_id END) AS purchased\nFROM events\nWHERE created_at >= CURRENT_DATE - INTERVAL '30 day';"),
  play("topn", {
    zh: ["分组 Top N", "找出每个品类销量前三的商品。"],
    en: ["Top N per group", "Find the three best-selling products per category."],
    fr: ["Top N par groupe", "Trouver les trois meilleurs produits par categorie."],
  }, "WITH ranked AS (\n  SELECT category_id,\n         product_id,\n         SUM(quantity) AS units,\n         DENSE_RANK() OVER (\n           PARTITION BY category_id\n           ORDER BY SUM(quantity) DESC\n         ) AS rank_in_category\n  FROM order_items\n  GROUP BY category_id, product_id\n)\nSELECT *\nFROM ranked\nWHERE rank_in_category <= 3;"),
];

function item(id, level, category, title, text, sql) {
  return { id, level, category, title, text, sql };
}

function play(id, text, sql) {
  return { id, text, sql };
}

function t(key) {
  return copy[state.lang][key] ?? key;
}

function textPack(entry) {
  const [summary, useCase, usage] = entry.text[state.lang];
  return { summary, useCase, usage };
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  renderFilters();
  renderSyntax();
  renderPipeline();
  renderPlaybook();
}

function renderFilters() {
  const levelFilters = document.querySelector("#levelFilters");
  levelFilters.innerHTML = ["all", "basic", "intermediate", "advanced"].map((level) => `
    <button class="filter-btn ${state.level === level ? "active" : ""}" data-level="${level}" type="button">
      ${t(level)}
    </button>
  `).join("");

  const categoryList = document.querySelector("#categoryList");
  categoryList.innerHTML = [
    `<button class="category-btn ${state.category === "all" ? "active" : ""}" data-category="all" type="button">${t("all")}</button>`,
    ...categories.map((category) => `
      <button class="category-btn ${state.category === category.id ? "active" : ""}" data-category="${category.id}" type="button">
        ${category[state.lang]}
      </button>
    `),
  ].join("");
}

function renderSyntax() {
  const grid = document.querySelector("#syntaxGrid");
  const filtered = syntaxItems.filter((entry) => {
    const haystack = [
      entry.title,
      entry.level,
      categories.find((category) => category.id === entry.category)?.[state.lang],
      ...entry.text[state.lang],
      entry.sql,
    ].join(" ").toLowerCase();
    return (state.level === "all" || entry.level === state.level)
      && (state.category === "all" || entry.category === state.category)
      && haystack.includes(state.query.toLowerCase());
  });

  grid.innerHTML = filtered.map((entry) => {
    const body = textPack(entry);
    const category = categories.find((item) => item.id === entry.category);
    return `
      <article class="syntax-card">
        <div class="card-top">
          <div class="card-meta">
            <span class="pill level-${entry.level}">${t(entry.level)}</span>
            <span class="pill">${category[state.lang]}</span>
          </div>
          <h3>${entry.title}</h3>
          <p>${body.summary}</p>
        </div>
        <div class="card-body">
          <div class="usage">
            <strong>${t("useCase")}</strong>
            <p>${body.useCase}</p>
          </div>
          <div class="usage">
            <strong>${t("usage")}</strong>
            <p>${body.usage}</p>
          </div>
          <div class="code-block">
            <pre><code>${escapeHtml(entry.sql)}</code></pre>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelector("#syntaxCount").textContent = syntaxItems.length;
  document.querySelector("#resultCount").textContent = `${filtered.length} ${t("results")}`;
}

function renderPipeline() {
  document.querySelector("#pipeline").innerHTML = pipelineItems.map((step, index) => {
    const description = state.lang === "zh" ? step[1] : state.lang === "en" ? step[2] : step[3];
    return `
      <article class="pipeline-step">
        <strong>${String(index + 1).padStart(2, "0")}</strong>
        <h3>${step[0]}</h3>
        <p>${description}</p>
      </article>
    `;
  }).join("");
}

function renderPlaybook() {
  document.querySelector("#playbookGrid").innerHTML = playbookItems.map((entry) => `
    <article class="play-card">
      <h3>${entry.text[state.lang][0]}</h3>
      <p>${entry.text[state.lang][1]}</p>
      <div class="code-block">
        <pre><code>${escapeHtml(entry.sql)}</code></pre>
      </div>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

document.addEventListener("click", (event) => {
  const langButton = event.target.closest(".lang-btn");
  if (langButton) setLanguage(langButton.dataset.lang);

  const levelButton = event.target.closest(".filter-btn");
  if (levelButton) {
    state.level = levelButton.dataset.level;
    renderFilters();
    renderSyntax();
  }

  const categoryButton = event.target.closest(".category-btn");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    renderFilters();
    renderSyntax();
  }
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderSyntax();
});

function startSchemaCanvas() {
  const canvas = document.querySelector("#schemaCanvas");
  const context = canvas.getContext("2d");
  const nodes = Array.from({ length: 38 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    radius: index % 7 === 0 ? 4.2 : 2.4,
    speed: 0.0005 + Math.random() * 0.0008,
    phase: Math.random() * Math.PI * 2,
  }));

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(time) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const points = nodes.map((node) => {
      const drift = Math.sin(time * node.speed + node.phase) * 22;
      return {
        x: node.x * window.innerWidth + drift,
        y: node.y * window.innerHeight + Math.cos(time * node.speed + node.phase) * 18,
        radius: node.radius,
      };
    });

    context.lineWidth = 1;
    points.forEach((point, index) => {
      for (let cursor = index + 1; cursor < points.length; cursor += 1) {
        const other = points[cursor];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 170) {
          context.strokeStyle = `rgba(49, 215, 196, ${0.14 - distance / 1400})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    });

    points.forEach((point, index) => {
      context.fillStyle = index % 5 === 0 ? "rgba(242, 184, 75, 0.7)" : "rgba(49, 215, 196, 0.72)";
      context.beginPath();
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(draw);
}

setLanguage("zh");
startSchemaCanvas();
