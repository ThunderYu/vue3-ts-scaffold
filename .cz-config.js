module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: '✨ 新增:  新功能' },
    { value: 'fix', name: '🐛 修复:  修复bug' },
    { value: 'docs', name: '📝 文档:  文档变更' },
    { value: 'style', name: '💄 格式:  代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: '♻️  重构:  代码重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: '⚡️ 性能:  性能优化' },
    { value: 'test', name: '✅ 测试:  增加一个测试' },
    { value: 'chore', name: '🔧 工具:  构建过程或辅助工具的变动' },
    { value: 'revert', name: '⏪ 回滚:  代码回退' },
    { value: 'build', name: '🚀 打包:  打包发布' }
  ],
  // 影响范围
  scopes: [
    { name: '业务模块' },
    { name: '路由配置' },
    { name: '状态管理' },
    { name: '公共组件/方法' },
    { name: '依赖包/资源' },
    { name: '工程化相关' },
    { name: '其他' }
  ],
  // 指定某种类型的提交的可选影响范围
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // 自定义提示信息
  messages: {
    type: '请选择提交类型:',
    scope: '选择影响范围(可选):',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？'
  },
  // 允许自定义影响范围
  // allowCustomScopes: true,
  // 跳过问题（跳过issue关联）
  skipQuestions: ['footer'],
  // subject文字长度默认是72
  subjectLimit: 72
};
