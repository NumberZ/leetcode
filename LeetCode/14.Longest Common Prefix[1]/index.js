/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.65%)
 * Total Accepted:    50.7K
 * Total Submissions: 159.3K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const substr = strs[0];
  if (strs.length === 0) return '';
  for (let i = 0; i < substr.length; i++) {
    const char = substr[i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].length === 0) return '';
      if (strs[j][i] !== char) return substr.substring(0, i);
    }
  }
  return substr;
};


/**
 * trie树解法
 */
