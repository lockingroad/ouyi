# 项目 Push 优化指南

## 当前问题分析

- **Git 仓库大小**: 41MB
- **图片资源**: 41MB (59个文件)
- **视频资源**: 7.3MB (2个文件)
- **总媒体资源**: ~48MB

## 优化方案

### 方案 1: 图片压缩优化（推荐，立即可用）

**问题**: 当前图片文件过大（单个文件 800KB-1.2MB）

**解决方案**: 使用 macOS 自带的 sips 工具压缩图片

```bash
# 运行优化脚本
chmod +x optimize-images.sh
./optimize-images.sh
```

**预期效果**: 可减少 50-70% 的图片大小，节省约 20-30MB

---

### 方案 2: 使用 Git LFS 管理大文件（推荐用于视频）

**适用于**: 视频文件和超大图片

**安装 Git LFS**:
```bash
brew install git-lfs
git lfs install
```

**配置 LFS 跟踪视频文件**:
```bash
git lfs track "*.mp4"
git lfs track "*.mov"
git add .gitattributes
```

**迁移现有视频到 LFS**:
```bash
git lfs migrate import --include="*.mp4"
```

**优点**: 
- 视频文件不会直接推送到 Git，而是上传到 LFS 存储
- 大幅减少 push 时间
- 克隆仓库时更快

---

### 方案 3: 使用 CDN 托管媒体资源（最佳长期方案）

**推荐服务**:
- 阿里云 OSS
- 腾讯云 COS
- 七牛云
- Cloudflare R2 (免费额度大)

**实施步骤**:
1. 将图片/视频上传到 CDN
2. 更新代码中的图片路径为 CDN URL
3. 从 Git 仓库删除媒体文件
4. 添加到 .gitignore

**优点**:
- Git 仓库极小
- 网站加载速度更快
- 支持图片处理（缩略图、裁剪等）
- 节省服务器带宽

---

### 方案 4: 优化 .gitignore

**当前 .gitignore 已包含**:
- ✓ node_modules
- ✓ .next
- ✓ .env

**建议添加**:
```gitignore
# 开发工具
.vscode/
.idea/
*.swp
*.swo

# 系统文件
.DS_Store
Thumbs.db

# 临时文件
*.log
*.tmp
.cache/

# 如果使用 CDN，可以忽略本地媒体
# public/images/
# public/videos/
```

---

## 立即可执行的优化步骤

### 步骤 1: 压缩现有图片
```bash
./optimize-images.sh
```

### 步骤 2: 提交优化后的图片
```bash
git add public/images
git commit -m "优化图片大小，减少仓库体积"
```

### 步骤 3: 配置 Git LFS 管理视频
```bash
# 安装 Git LFS
brew install git-lfs
git lfs install

# 跟踪视频文件
git lfs track "*.mp4"
git add .gitattributes

# 迁移现有视频
git lfs migrate import --include="*.mp4" --everything

# 提交更改
git add .
git commit -m "使用 Git LFS 管理视频文件"
```

### 步骤 4: 强制推送（如果使用了 LFS migrate）
```bash
git push origin main --force
```

---

## 预期优化效果

| 优化项 | 当前大小 | 优化后 | 节省 |
|--------|---------|--------|------|
| 图片压缩 | 41MB | ~15MB | ~26MB |
| 视频 LFS | 7.3MB | ~0MB* | 7.3MB |
| **总计** | **48MB** | **~15MB** | **~33MB** |

*使用 LFS 后，视频文件不计入 Git 仓库大小

---

## 推荐执行顺序

1. **立即执行**: 图片压缩（方案1）
2. **短期**: Git LFS 管理视频（方案2）
3. **长期**: 迁移到 CDN（方案3）

---

## 注意事项

- 执行 Git LFS migrate 会重写历史，需要 force push
- 建议在执行前备份仓库
- 团队成员需要安装 Git LFS 才能正常拉取
